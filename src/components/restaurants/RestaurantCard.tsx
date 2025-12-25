import * as React from 'react';
import { Restaurant } from '../../types/restaurant';
import { useRestaurantStatus } from '../../hooks/useRestaurantStatus';
import { FaStar, FaPhone, FaMapMarkerAlt, FaUtensils, FaClock } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
  className?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, className = '' }) => {
  const { isOpen, nextOpening } = useRestaurantStatus(restaurant.openingHours);
  
  // Function to render price range indicators
  const renderPriceRange = (priceRange: string) => {
    const count = priceRange.length;
    return (
      <div className="flex items-center text-yellow-600">
        {Array.from({ length: 4 }).map((_, i) => (
          <GiMoneyStack 
            key={i} 
            className={`w-4 h-4 ${i < count ? 'text-yellow-600' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  // Function to render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="font-medium">{rating.toFixed(1)}</span>
        <span className="text-gray-500 text-sm ml-1">({restaurant.reviewCount})</span>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Restaurant Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {restaurant.images && restaurant.images.length > 0 ? (
          <img 
            src={restaurant.images[0]} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <FaUtensils className="text-gray-400 text-4xl" />
          </div>
        )}
        
        {/* Status Badge */}
        <div 
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
            isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {isOpen ? 'Open Now' : 'Closed'}
        </div>
      </div>
      
      {/* Restaurant Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link 
            to={`/restaurants/${restaurant.id}`}
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            {restaurant.name}
          </Link>
          {renderRating(restaurant.rating)}
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaMapMarkerAlt className="mr-1 text-red-500" />
          <span className="truncate">{restaurant.address}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <FaPhone className="mr-1 text-blue-500" />
          <a href={`tel:${restaurant.contact.phone}`} className="hover:text-blue-600">
            {restaurant.contact.phone}
          </a>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <FaUtensils className="mr-2 text-green-500" />
          <div className="flex flex-wrap gap-1">
            {restaurant.cuisine.slice(0, 3).map((cuisine: string, index: number) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                {cuisine}
              </span>
            ))}
            {restaurant.cuisine.length > 3 && (
              <span className="text-xs text-gray-500">+{restaurant.cuisine.length - 3} more</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm">
            <FaClock className="mr-1 text-blue-500" />
            <span className={isOpen ? 'text-green-600' : 'text-red-600'}>
              {isOpen ? 'Open Now' : nextOpening}
            </span>
          </div>
          {renderPriceRange(restaurant.priceRange)}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
