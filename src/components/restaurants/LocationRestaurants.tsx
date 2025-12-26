import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Restaurant {
  id: string | number;
  name: string;
  cuisine: string[];
  address: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  opening_hours: {
    [key: string]: Array<{
      open: string;
      close: string;
      isClosed: boolean;
    }>;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  rating: number;
  price_range: string;
  images: string[];
  reviews: any[];
}

interface LocationRestaurantsProps {
  location: string;
  title: string;
}

const LocationRestaurants: React.FC<LocationRestaurantsProps> = ({ location, title }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchRestaurants();
    fetchCuisines();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      // First try the simple server-side seed endpoint (/server) that returns district foodPlaces
      const seedResp = await fetch(`/api/food/${encodeURIComponent(location)}`);
      let seedData: any[] = [];
      if (seedResp.ok) {
        seedData = await seedResp.json();
      }

      // Try alternate district name for common mismatch (Kanchipuram vs Kancheepuram)
      if ((!Array.isArray(seedData) || seedData.length === 0) && location.toLowerCase().includes('kanchi')) {
        const alt = 'Kancheepuram';
        const altResp = await fetch(`/api/food/${encodeURIComponent(alt)}`);
        if (altResp.ok) seedData = await altResp.json();
      }

      if (Array.isArray(seedData) && seedData.length > 0) {
          const mapped = seedData.map((r: any) => ({
            id: r.id,
            name: r.name,
            cuisine: Array.isArray(r.cuisine) ? r.cuisine : [r.cuisine],
            address: r.area || '',
            location: { type: 'Point', coordinates: [0, 0] },
            opening_hours: {
              monday: [{ open: '09:00', close: '21:00', isClosed: false }],
              tuesday: [{ open: '09:00', close: '21:00', isClosed: false }],
              wednesday: [{ open: '09:00', close: '21:00', isClosed: false }],
              thursday: [{ open: '09:00', close: '21:00', isClosed: false }],
              friday: [{ open: '09:00', close: '21:00', isClosed: false }],
              saturday: [{ open: '09:00', close: '21:00', isClosed: false }],
              sunday: [{ open: '09:00', close: '21:00', isClosed: false }],
            },
            contact: { phone: '', email: '' },
            rating: r.rating || 4.0,
            price_range: r.price_range || '',
            images: r.image ? [r.image] : [],
            reviews: []
          } as Restaurant));
          setRestaurants(mapped);
          return;
        }
      }

      // Fallback to full restaurants API (database-backed)
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      // Filter restaurants by location (simple address-based filtering)
      const locationRestaurants = data.filter((restaurant: Restaurant) =>
        restaurant.address && restaurant.address.toLowerCase().includes(location.toLowerCase())
      );
      setRestaurants(locationRestaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCuisines = async () => {
    try {
      const response = await fetch('/api/restaurants/cuisines/list');
      const data = await response.json();
      setCuisines(data);
    } catch (error) {
      console.error('Error fetching cuisines:', error);
    }
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = !selectedCuisine || restaurant.cuisine.includes(selectedCuisine);
    const matchesPrice = !selectedPriceRange || restaurant.price_range === selectedPriceRange;
    const matchesRating = restaurant.rating >= selectedRating;
    
    return matchesSearch && matchesCuisine && matchesPrice && matchesRating;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCuisine('');
    setSelectedPriceRange('');
    setSelectedRating(0);
  };

  const isOpen = (opening_hours: any) => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    if (opening_hours[day] && opening_hours[day].length > 0) {
      const todayHours = opening_hours[day][0];
      if (todayHours.isClosed) return false;
      
      const [openHour, openMin] = todayHours.open.split(':').map(Number);
      const [closeHour, closeMin] = todayHours.close.split(':').map(Number);
      const openTime = openHour * 60 + openMin;
      const closeTime = closeHour * 60 + closeMin;
      
      return currentTime >= openTime && currentTime <= closeTime;
    }
    return false;
  };

  if (loading) {
    return (
      <div className="py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading restaurants...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Places to Eat in {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the best restaurants and local cuisine in {title}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FunnelIcon className="h-5 w-5" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cuisine
              </label>
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">All Cuisines</option>
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">All Prices</option>
                <option value="$">$ - Budget</option>
                <option value="$$">$$ - Moderate</option>
                <option value="$$$">$$$ - Expensive</option>
                <option value="$$$$">$$$$ - Fine Dining</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Minimum Rating
              </label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="0">All Ratings</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
        )}

        {(searchTerm || selectedCuisine || selectedPriceRange || selectedRating > 0) && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <XMarkIcon className="h-4 w-4" />
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">
          Showing {filteredRestaurants.length} of {restaurants.length} restaurants
        </p>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {restaurant.images.length > 0 ? (
                <img
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 dark:text-gray-500">
                  No image available
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {restaurant.rating}
                  </span>
                </div>
              </div>
              
              <div className="mb-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {restaurant.cuisine.join(', ')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {restaurant.price_range}
                </p>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {restaurant.address}
              </p>

              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  isOpen(restaurant.opening_hours)
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {isOpen(restaurant.opening_hours) ? 'Open Now' : 'Closed'}
                </span>
                <button
                  onClick={() => {
                    // In a real app, this would navigate to restaurant details
                    alert(`Restaurant details for ${restaurant.name}`);
                  }}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            No restaurants found matching your criteria in {title}.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationRestaurants;
