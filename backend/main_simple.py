from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Tamil Nadu Tourism API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample data
restaurants = [
    {
        "id": 1,
        "name": "Taj Mahal Restaurant",
        "cuisine": ["South Indian", "North Indian"],
        "address": "123 MG Road, Chennai",
        "location": {"type": "Point", "coordinates": [80.27, 13.08]},
        "opening_hours": {
            "monday": [{"open": "09:00", "close": "22:00", "isClosed": False}],
            "tuesday": [{"open": "09:00", "close": "22:00", "isClosed": False}],
            "sunday": [{"open": "10:00", "close": "22:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+911234567890",
            "email": "info@tajmahal.com",
            "website": "https://tajmahal.com"
        },
        "rating": 4.5,
        "price_range": "$$",
        "images": ["taj-mahal-1.jpg", "taj-mahal-2.jpg"],
        "reviews": []
    },
    {
        "id": 2,
        "name": "Saravana Bhavan",
        "cuisine": ["South Indian"],
        "address": "456 Anna Salai, Chennai",
        "location": {"type": "Point", "coordinates": [80.27, 13.08]},
        "opening_hours": {
            "monday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
            "tuesday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
            "sunday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+919876543210",
            "email": "info@saravanabhavan.com",
            "website": "https://saravanabhavan.com"
        },
        "rating": 4.7,
        "price_range": "$",
        "images": ["saravana-1.jpg", "saravana-2.jpg"],
        "reviews": []
    },
    {
        "id": 3,
        "name": "The Chinese Pavilion",
        "cuisine": ["Chinese"],
        "address": "789 Cathedral Road, Chennai",
        "location": {"type": "Point", "coordinates": [80.27, 13.08]},
        "opening_hours": {
            "monday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
            "tuesday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
            "sunday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+911122334455",
            "email": "info@chinesepavilion.com",
            "website": "https://chinesepavilion.com"
        },
        "rating": 4.2,
        "price_range": "$$$",
        "images": ["chinese-1.jpg", "chinese-2.jpg"],
        "reviews": []
    },
    {
        "id": 4,
        "name": "Madurai Mess",
        "cuisine": ["South Indian"],
        "address": "100 Town Hall Road, Madurai",
        "location": {"type": "Point", "coordinates": [78.12, 9.93]},
        "opening_hours": {
            "monday": [{"open": "07:00", "close": "22:00", "isClosed": False}],
            "tuesday": [{"open": "07:00", "close": "22:00", "isClosed": False}],
            "sunday": [{"open": "07:00", "close": "22:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+914567890123",
            "email": "info@maduraimess.com",
            "website": "https://maduraimess.com"
        },
        "rating": 4.6,
        "price_range": "$",
        "images": ["madurai-1.jpg", "madurai-2.jpg"],
        "reviews": []
    },
    {
        "id": 5,
        "name": "Temple View Restaurant",
        "cuisine": ["South Indian", "Tamil"],
        "address": "200 West Tower Street, Madurai",
        "location": {"type": "Point", "coordinates": [78.12, 9.93]},
        "opening_hours": {
            "monday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
            "tuesday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
            "sunday": [{"open": "06:00", "close": "23:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+914567890124",
            "email": "info@templeview.com",
            "website": "https://templeview.com"
        },
        "rating": 4.4,
        "price_range": "$$",
        "images": ["temple-1.jpg", "temple-2.jpg"],
        "reviews": []
    },
    {
        "id": 6,
        "name": "Ooty Tea Garden",
        "cuisine": ["Continental", "Chinese"],
        "address": "300 Church Hill Road, Ooty",
        "location": {"type": "Point", "coordinates": [76.73, 11.41]},
        "opening_hours": {
            "monday": [{"open": "08:00", "close": "21:00", "isClosed": False}],
            "tuesday": [{"open": "08:00", "close": "21:00", "isClosed": False}],
            "sunday": [{"open": "08:00", "close": "21:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+914234567890",
            "email": "info@ootyteagarden.com",
            "website": "https://ootyteagarden.com"
        },
        "rating": 4.3,
        "price_range": "$$$",
        "images": ["ooty-1.jpg", "ooty-2.jpg"],
        "reviews": []
    },
    {
        "id": 7,
        "name": "Coimbatore Biryani House",
        "cuisine": ["Biryani", "Mughlai"],
        "address": "400 Cross Cut Road, Coimbatore",
        "location": {"type": "Point", "coordinates": [76.97, 10.99]},
        "opening_hours": {
            "monday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
            "tuesday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
            "sunday": [{"open": "11:00", "close": "23:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+914223456789",
            "email": "info@coimbatoribiryani.com",
            "website": "https://coimbatoribiryani.com"
        },
        "rating": 4.5,
        "price_range": "$$",
        "images": ["coimbatore-1.jpg", "coimbatore-2.jpg"],
        "reviews": []
    },
    {
        "id": 8,
        "name": "Kanchipuram Kitchen",
        "cuisine": ["South Indian", "Traditional"],
        "address": "500 Sannathi Street, Kanchipuram",
        "location": {"type": "Point", "coordinates": [79.70, 12.85]},
        "opening_hours": {
            "monday": [{"open": "06:00", "close": "22:00", "isClosed": False}],
            "tuesday": [{"open": "06:00", "close": "22:00", "isClosed": False}],
            "sunday": [{"open": "06:00", "close": "22:00", "isClosed": False}],
        },
        "contact": {
            "phone": "+914112345678",
            "email": "info@kanchipuramkitchen.com",
            "website": "https://kanchipuramkitchen.com"
        },
        "rating": 4.4,
        "price_range": "$",
        "images": ["kanchipuram-1.jpg", "kanchipuram-2.jpg"],
        "reviews": []
    }
]

@app.get("/")
async def read_root():
    return {"message": "Welcome to Tamil Nadu Tourism API"}

@app.get("/api/restaurants")
async def get_restaurants():
    return restaurants

@app.get("/api/restaurants/{restaurant_id}")
async def get_restaurant(restaurant_id: int):
    restaurant = next((r for r in restaurants if r["id"] == restaurant_id), None)
    if not restaurant:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return restaurant

@app.get("/api/restaurants/cuisines/list")
async def get_cuisines():
    cuisines = set()
    for restaurant in restaurants:
        cuisines.update(restaurant["cuisine"])
    return list(cuisines)

@app.post("/api/sample-data")
async def create_sample_data():
    return {"status": "Sample data already exists"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main_simple:app", host="0.0.0.0", port=8000, reload=True)
