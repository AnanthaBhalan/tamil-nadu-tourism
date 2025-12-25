import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  GlobeAltIcon, 
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Review {
  id: number;
  user_id: string;
  user_name: string;
  rating: number;
  comment: string;
  images: string[];
  created_at: string;
}

interface Restaurant {
  id: number;
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
  reviews: Review[];
}

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    user_name: '',
    rating: 5,
    comment: ''
  });

  useEffect(() => {
    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  const fetchRestaurant = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/restaurants/${id}`);
      if (!response.ok) {
        throw new Error('Restaurant not found');
      }
      const data = await response.json();
      setRestaurant(data);
    } catch (error) {
      console.error('Error fetching restaurant:', error);
      setError('Failed to load restaurant details');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant || !id) return;

    try {
      const response = await fetch(`/api/restaurants/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 'user_' + Date.now(), // Simple user ID generation
          user_name: newReview.user_name,
          rating: newReview.rating,
          comment: newReview.comment,
          images: []
        })
      });
      
      if (response.ok) {
        // Refresh restaurant data
        await fetchRestaurant();
        
        // Reset form
        setNewReview({ user_name: '', rating: 5, comment: '' });
        setShowReviewForm(false);
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }
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

  const getNextOpenTime = (opening_hours: any) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    for (let i = 0; i < 7; i++) {
      const checkDay = days[(days.indexOf(currentDay) + i) % 7];
      if (opening_hours[checkDay] && opening_hours[checkDay].length > 0) {
        const dayHours = opening_hours[checkDay][0];
        if (!dayHours.isClosed) {
          return i === 0 ? `Today at ${dayHours.open}` : `${checkDay.charAt(0).toUpperCase() + checkDay.slice(1)} at ${dayHours.open}`;
        }
      }
    }
    return 'Closed all week';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading restaurant details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">{error || 'Restaurant not found'}</p>
            <Link
              to="/restaurants"
              className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Restaurants
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/restaurants"
          className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Restaurants
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {restaurant.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {restaurant.rating}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ({restaurant.reviews.length} reviews)
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {restaurant.price_range}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {restaurant.cuisine.join(', ')}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                isOpen(restaurant.opening_hours)
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                <ClockIcon className="h-4 w-4" />
                {isOpen(restaurant.opening_hours) ? 'Open Now' : `Closed - Opens ${getNextOpenTime(restaurant.opening_hours)}`}
              </div>
            </div>

            {/* Images */}
            {restaurant.images.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {restaurant.images.map((image, index) => (
                    <div key={index} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${restaurant.name} - Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reviews ({restaurant.reviews.length})
                </h2>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Write a Review
                </button>
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <form onSubmit={handleSubmitReview} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Write Your Review
                  </h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.user_name}
                      onChange={(e) => setNewReview({ ...newReview, user_name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1"
                        >
                          <StarIcon
                            className={`h-6 w-6 ${
                              star <= newReview.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Review
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Submit Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {restaurant.reviews.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-300 text-center py-8">
                    No reviews yet. Be the first to write one!
                  </p>
                ) : (
                  restaurant.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 dark:text-gray-300 font-medium">
                              {review.user_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {review.user_name}
                            </p>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating
                                      ? 'text-yellow-400'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(review.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {restaurant.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-700 dark:text-gray-300">
                    {restaurant.contact.phone}
                  </p>
                </div>
                {restaurant.contact.email && (
                  <div className="flex items-center gap-3">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {restaurant.contact.email}
                    </p>
                  </div>
                )}
                {restaurant.contact.website && (
                  <div className="flex items-center gap-3">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                    <a
                      href={restaurant.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Opening Hours
              </h2>
              <div className="space-y-2">
                {Object.entries(restaurant.opening_hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 capitalize">
                      {day}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {hours[0].isClosed ? 'Closed' : `${hours[0].open} - ${hours[0].close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
