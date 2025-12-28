from fastapi import FastAPI, HTTPException, Query, Body
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from bson import ObjectId
from typing import List, Optional
from pydantic import BaseModel, Field
from datetime import datetime
import json

# MongoDB setup
MONGODB_URI = "mongodb://localhost:27017/"
DATABASE_NAME = "tamilnadu_tourism"

client = MongoClient(MONGODB_URI, server_api=ServerApi('1'))
db = client[DATABASE_NAME]

# Pydantic models
class Review(BaseModel):
    user_id: str
    user_name: str
    rating: int = Field(..., ge=1, le=5)
    comment: str
    images: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Restaurant(BaseModel):
    name: str
    cuisine: List[str]
    address: str
    location: dict
    opening_hours: dict
    contact: dict
    rating: float = 0.0
    price_range: str
    images: List[str] = []
    reviews: List[Review] = []

# Create FastAPI app
app = FastAPI(title="Tamil Nadu Tourism API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Helper function to convert ObjectId to string
def convert_objectid(doc):
    if isinstance(doc, dict):
        for key, value in doc.items():
            if isinstance(value, ObjectId):
                doc[key] = str(value)
            elif isinstance(value, dict):
                doc[key] = convert_objectid(value)
            elif isinstance(value, list):
                doc[key] = [convert_objectid(item) if isinstance(item, (dict, list)) else str(item) if isinstance(item, ObjectId) else item for item in value]
    return doc

# Simple test endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to Tamil Nadu Tourism API"}

# Health check endpoint
@app.get("/health")
def health_check():
    try:
        # Test MongoDB connection
        client.admin.command('ping')
        return {"status": "ok", "database": "connected"}
    except Exception as e:
        return {"status": "error", "database": "disconnected", "error": str(e)}

# Restaurant endpoints
@app.get("/api/restaurants", response_model=List[dict])
async def get_restaurants(
    cuisine: Optional[str] = None,
    min_rating: float = 0,
    price_range: Optional[str] = None,
    is_open: bool = False
):
    query = {}
    if cuisine:
        query["cuisine"] = {"$in": [cuisine]}
    if min_rating > 0:
        query["rating"] = {"$gte": min_rating}
    if price_range:
        query["price_range"] = price_range
    
    if is_open:
        now = datetime.now()
        current_day = now.strftime("%A").lower()
        current_time = now.strftime("%H:%M")
        
        query[f"opening_hours.{current_day}"] = {
            "$elemMatch": {
                "isClosed": False,
                "open": {"$lte": current_time},
                "close": {"$gte": current_time}
            }
        }
    
    restaurants = list(db.restaurants.find(query))
    return [convert_objectid(restaurant) for restaurant in restaurants]

@app.get("/api/restaurants/{restaurant_id}", response_model=dict)
async def get_restaurant(restaurant_id: str):
    try:
        restaurant = db.restaurants.find_one({"_id": ObjectId(restaurant_id)})
        if restaurant:
            return convert_objectid(restaurant)
    except:
        pass
    raise HTTPException(status_code=404, detail=f"Restaurant {restaurant_id} not found")

@app.post("/api/restaurants/{restaurant_id}/reviews")
async def add_review(restaurant_id: str, review: Review):
    review_dict = review.dict()
    review_dict["_id"] = ObjectId()
    review_dict["created_at"] = datetime.utcnow()
    
    try:
        result = db.restaurants.update_one(
            {"_id": ObjectId(restaurant_id)},
            {"$push": {"reviews": review_dict}}
        )
        
        if result.modified_count == 1:
            # Update the restaurant's average rating
            pipeline = [
                {"$match": {"_id": ObjectId(restaurant_id)}},
                {"$unwind": "$reviews"},
                {"$group": {
                    "_id": "$_id",
                    "avg_rating": {"$avg": "$reviews.rating"}
                }}
            ]
            avg_rating = list(db.restaurants.aggregate(pipeline))
            
            if avg_rating:
                db.restaurants.update_one(
                    {"_id": ObjectId(restaurant_id)},
                    {"$set": {"rating": round(avg_rating[0]["avg_rating"], 1)}}
                )
            
            return {"status": "success", "review_id": str(review_dict["_id"])}
    except Exception as e:
        print(f"Error adding review: {str(e)}")
    
    raise HTTPException(status_code=404, detail=f"Failed to add review")

@app.get("/api/restaurants/cuisines/list", response_model=List[str])
async def get_cuisines():
    cuisines = db.restaurants.distinct("cuisine")
    return [cuisine for sublist in cuisines for cuisine in sublist]  # Flatten the list of lists

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
