import { Link } from 'react-router-dom';

const HomePage = () => {
  // Using placeholder images from placeholder.com with city names
  const destinations = [
    { 
      id: 'chennai',
      name: 'Chennai', 
      description: 'The Gateway to South India',
      image: 'https://placehold.co/600x400/1e40af/ffffff?text=Chennai',
      path: '/chennai'
    },
    { 
      id: 'madurai',
      name: 'Madurai', 
      description: 'Athens of the East',
      image: 'https://placehold.co/600x400/9d174d/ffffff?text=Madurai',
      path: '/madurai'
    },
    { 
      id: 'ooty',
      name: 'Ooty', 
      description: 'Queen of Hill Stations',
      image: 'https://placehold.co/600x400/166534/ffffff?text=Ooty',
      path: '/ooty'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Tamil Nadu</h1>
          <p className="text-xl mb-8">Discover the rich cultural heritage and natural beauty of South India</p>
          <div className="flex space-x-4 justify-center">
            {destinations.map(dest => (
              <Link 
                key={dest.id}
                to={dest.path}
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                {dest.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onLoad={(e) => {
                      // Image loaded successfully
                      (e.target as HTMLImageElement).style.opacity = '1';
                    }}
                    onError={(e) => {
                      // Fallback in case image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      target.style.opacity = '1';
                    }}
                    style={{
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ display: 'none' }}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <Link 
                    to={place.path}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
