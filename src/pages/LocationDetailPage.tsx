import { useParams } from 'react-router-dom';

const LocationDetailPage = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data from an API
  const location = {
    id: id,
    name: 'Sample Location',
    description: 'This is a detailed description of the location.',
    image: 'https://via.placeholder.com/800x400',
    address: '123 Example Street, City, State',
    rating: 4.5,
    reviews: 128,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{location.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(location.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                {location.rating} ({location.reviews} reviews)
              </span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{location.description}</p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-gray-600">{location.address}</p>
            <div className="mt-4 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map would be displayed here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailPage;
