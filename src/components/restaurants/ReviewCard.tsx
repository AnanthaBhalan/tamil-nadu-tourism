import * as React from 'react';
import { Review } from '../../types/restaurant';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { format } from 'date-fns';

interface ReviewCardProps {
  review: Review;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className = '' }) => {
  // Format the date to a readable format (e.g., "January 1, 2023")
  const formattedDate = format(new Date(review.date), 'MMMM d, yyyy');
  
  // Create an array of stars based on the rating
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar 
      key={i} 
      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
    />
  ));

  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100 ${className}`}>
      <div className="flex items-start">
        {/* User Avatar */}
        <div className="mr-3">
          {review.userImage ? (
            <img 
              src={review.userImage} 
              alt={review.userName} 
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="w-10 h-10 text-gray-400" />
          )}
        </div>
        
        <div className="flex-1">
          {/* User Info and Rating */}
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">{review.userName}</h4>
              <div className="flex items-center mt-1">
                <div className="flex mr-2">
                  {stars}
                </div>
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
            </div>
          </div>
          
          {/* Review Text */}
          <p className="mt-2 text-gray-700">{review.comment}</p>
          
          {/* Review Images */}
          {review.images && review.images.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {review.images.map((image: string, index: number) => (
                <div key={index} className="w-20 h-20 rounded-md overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Review ${index + 1}`} 
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => {
                      // This would typically open a lightbox or modal
                      console.log('Open image in lightbox:', image);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Helpful/Report Actions */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-sm text-gray-500">
            <button className="flex items-center mr-4 hover:text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              Helpful
            </button>
            <button className="hover:text-red-600">
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
