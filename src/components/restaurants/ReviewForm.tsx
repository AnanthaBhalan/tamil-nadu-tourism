import * as React from 'react';
import { useState } from 'react';
import { FaStar, FaImage, FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface ReviewFormData {
  rating: number;
  comment: string;
}

export interface ReviewFormProps {
  onSubmit: (data: { rating: number; comment: string; images: File[] }) => Promise<void>;
  isSubmitting?: boolean;
  className?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ 
  onSubmit, 
  isSubmitting = false, 
  className = '' 
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReviewFormData>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files) as File[];
      
      // Check total images won't exceed 5
      if (selectedImages.length + files.length > 5) {
        toast.error('You can upload a maximum of 5 images');
        return;
      }
      
      // Filter out non-image files
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      
      // Create previews for the new images
      const newImagePreviews = imageFiles.map(file => URL.createObjectURL(file));
      
      setSelectedImages(prev => [...prev, ...imageFiles]);
      setImagePreviews(prev => [...prev, ...newImagePreviews]);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(imagePreviews[index]);
  };

  const onSubmitForm = async (data: ReviewFormData) => {
    try {
      await onSubmit({
        rating,
        comment: data.comment,
        images: selectedImages
      });
      
      // Reset form on successful submission
      reset();
      setRating(5);
      setSelectedImages([]);
      setImagePreviews([]);
      
      // Revoke all object URLs to free memory
      imagePreviews.forEach(url => URL.revokeObjectURL(url));
      
      toast.success('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Write a Review</h3>
      
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <FaStar
                  className={`w-8 h-8 ${
                    (hoverRating || rating) >= star
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-500">
              {hoverRating || rating} out of 5
            </span>
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="comment"
            rows={4}
            className={`w-full px-3 py-2 border ${
              errors.comment ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Share details of your experience at this restaurant..."
            {...register('comment', { 
              required: 'Review is required',
              minLength: { value: 10, message: 'Review must be at least 10 characters' }
            })}
          />
          {errors.comment && (
            <p className="mt-1 text-sm text-red-600">{errors.comment.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Photos (Optional)
          </label>
          <div className="flex items-center">
            <label className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
              <FaImage className="w-5 h-5 mr-2 text-gray-500" />
              Add Photos
              <input
                type="file"
                className="sr-only"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                disabled={selectedImages.length >= 5}
              />
            </label>
            <span className="ml-2 text-sm text-gray-500">
              {selectedImages.length}/5 photos
            </span>
          </div>
          
          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove image"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
