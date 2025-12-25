from fastapi import FastAPI, HTTPException, Query, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import sqlalchemy
from sqlalchemy import Column, Integer, String, Float, JSON, DateTime, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
import json
import os

# SQLite Database Setup
SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./tamilnadu_tourism.db"

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession)

Base = declarative_base()

# Models
class Cuisine(Base):
    __tablename__ = "cuisines"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)

restaurant_cuisine = Table(
    'restaurant_cuisine',
    Base.metadata,
    Column('restaurant_id', Integer, ForeignKey('restaurants.id')),
    Column('cuisine_id', Integer, ForeignKey('cuisines.id'))
)

class Review(Base):
    __tablename__ = "reviews"
    id = Column(Integer, primary_key=True, index=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'))
    user_id = Column(String)
    user_name = Column(String)
    rating = Column(Integer)
    comment = Column(String)
    images = Column(JSON, default=list)
    created_at = Column(DateTime, default=datetime.utcnow)

class Restaurant(Base):
    __tablename__ = "restaurants"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address = Column(String)
    location = Column(JSON)
    opening_hours = Column(JSON)
    contact = Column(JSON)
    rating = Column(Float, default=0.0)
    price_range = Column(String)
    images = Column(JSON, default=list)
    cuisines = relationship("Cuisine", secondary=restaurant_cuisine, backref="restaurants")
    reviews = relationship("Review", backref="restaurant")

# Pydantic models
class ReviewBase(BaseModel):
    user_id: str
    user_name: str
    rating: int = Field(..., ge=1, le=5)
    comment: str
    images: List[str] = []

class ReviewCreate(ReviewBase):
    pass

class Review(ReviewBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class RestaurantBase(BaseModel):
    name: str
    address: str
    location: dict
    opening_hours: dict
    contact: dict
    price_range: str
    images: List[str] = []

class RestaurantCreate(RestaurantBase):
    cuisines: List[str]

class Restaurant(RestaurantBase):
    id: int
    rating: float
    cuisines: List[str]
    reviews: List[Review] = []

    class Config:
        orm_mode = True

# Create FastAPI app
app = FastAPI(title="Tamil Nadu Tourism API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database initialization
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    # Add sample cuisines if none exist
    async with SessionLocal() as db:
        try:
            result = await db.execute(sqlalchemy.text("SELECT COUNT(*) FROM cuisines"))
            count = result.scalar()
            if count == 0:
                sample_cuisines = [
                    "South Indian", "North Indian", "Chinese", "Italian", 
                    "Mexican", "Thai", "Japanese", "Mediterranean"
                ]
                for cuisine_name in sample_cuisines:
                    db.add(Cuisine(name=cuisine_name))
                await db.commit()
        except Exception as e:
            print(f"Error initializing cuisines: {e}")
            pass

# Startup event
@app.on_event("startup")
async def startup_event():
    await init_db()

# Helper functions
async def get_db():
    async with SessionLocal() as db:
        try:
            yield db
            await db.commit()
        except Exception:
            await db.rollback()
            raise
        finally:
            await db.close()

# API Endpoints
@app.get("/")
async def read_root():
    return {"message": "Welcome to Tamil Nadu Tourism API"}

@app.get("/health")
async def health_check():
    try:
        async with SessionLocal() as db:
            await db.execute("SELECT 1")
        return {"status": "ok", "database": "connected"}
    except Exception as e:
        return {"status": "error", "database": "disconnected", "error": str(e)}

@app.get("/api/restaurants", response_model=List[Restaurant])
async def get_restaurants(
    cuisine: Optional[str] = None,
    min_rating: float = 0,
    price_range: Optional[str] = None,
    is_open: bool = False
):
    async with SessionLocal() as db:
        query = sqlalchemy.select(Restaurant)
        
        if cuisine:
            query = query.join(restaurant_cuisine).join(Cuisine).where(Cuisine.name == cuisine)
        if min_rating > 0:
            query = query.where(Restaurant.rating >= min_rating)
        if price_range:
            query = query.where(Restaurant.price_range == price_range)
        
        result = await db.execute(query)
        restaurants = result.scalars().all()
        
        # Convert to dict and add cuisines
        restaurant_list = []
        for restaurant in restaurants:
            restaurant_dict = restaurant.__dict__
            restaurant_dict["cuisines"] = [c.name for c in restaurant.cuisines]
            restaurant_list.append(Restaurant.from_orm(restaurant_dict))
        
        return restaurant_list

@app.get("/api/restaurants/{restaurant_id}", response_model=Restaurant)
async def get_restaurant(restaurant_id: int):
    async with SessionLocal() as db:
        result = await db.execute(
            sqlalchemy.select(Restaurant).where(Restaurant.id == restaurant_id)
        )
        restaurant = result.scalars().first()
        if not restaurant:
            raise HTTPException(status_code=404, detail="Restaurant not found")
        
        restaurant_dict = restaurant.__dict__
        restaurant_dict["cuisines"] = [c.name for c in restaurant.cuisines]
        return Restaurant.from_orm(restaurant_dict)

@app.post("/api/restaurants/{restaurant_id}/reviews", response_model=Review)
async def add_review(restaurant_id: int, review: ReviewCreate):
    async with SessionLocal() as db:
        # Check if restaurant exists
        result = await db.execute(
            sqlalchemy.select(Restaurant).where(Restaurant.id == restaurant_id)
        )
        restaurant = result.scalars().first()
        if not restaurant:
            raise HTTPException(status_code=404, detail="Restaurant not found")
        
        # Create review
        db_review = Review(
            restaurant_id=restaurant_id,
            **review.dict(),
            created_at=datetime.utcnow()
        )
        db.add(db_review)
        await db.commit()
        await db.refresh(db_review)
        
        # Update restaurant rating
        await update_restaurant_rating(db, restaurant_id)
        
        return db_review

async def update_restaurant_rating(db: AsyncSession, restaurant_id: int):
    # Calculate new average rating
    result = await db.execute(
        sqlalchemy.select(
            sqlalchemy.func.avg(Review.rating).label("avg_rating")
        ).where(Review.restaurant_id == restaurant_id)
    )
    avg_rating = result.scalar_one_or_none() or 0.0
    
    # Update restaurant
    await db.execute(
        sqlalchemy.update(Restaurant)
        .where(Restaurant.id == restaurant_id)
        .values(rating=round(avg_rating, 1))
    )
    await db.commit()

@app.get("/api/restaurants/cuisines/list", response_model=List[str])
async def get_cuisines():
    async with SessionLocal() as db:
        result = await db.execute(sqlalchemy.select(Cuisine.name))
        return [row[0] for row in result.all()]

# Add sample data endpoint (for testing)
@app.post("/api/sample-data")
async def create_sample_data():
    async with SessionLocal() as db:
        # Add sample cuisines
        cuisines = [
            Cuisine(name="South Indian"),
            Cuisine(name="North Indian"),
            Cuisine(name="Chinese"),
            Cuisine(name="Italian"),
        ]
        db.add_all(cuisines)
        await db.commit()
        
        # Add sample restaurant
        restaurant = Restaurant(
            name="Taj Mahal Restaurant",
            address="123 MG Road, Chennai",
            location={"type": "Point", "coordinates": [80.27, 13.08]},
            opening_hours={
                "monday": [{"open": "09:00", "close": "22:00", "isClosed": False}],
                "tuesday": [{"open": "09:00", "close": "22:00", "isClosed": False}],
                "sunday": [{"open": "10:00", "close": "22:00", "isClosed": False}],
            },
            contact={
                "phone": "+911234567890",
                "email": "info@tajmahal.com",
                "website": "https://tajmahal.com"
            },
            price_range="$$",
            images=["taj-mahal-1.jpg", "taj-mahal-2.jpg"],
            rating=4.5
        )
        restaurant.cuisines = [cuisines[0], cuisines[1]]  # South Indian, North Indian
        db.add(restaurant)
        await db.commit()
        
        return {"status": "Sample data created"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)