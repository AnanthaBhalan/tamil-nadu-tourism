import * as React from 'react';
import { Link } from 'react-router-dom';

// Utility function to handle image loading and errors
const ImageWithFallback = ({
  src,
  alt,
  className = ''
}: {
  src: string;
  alt: string;
  className?: string
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(src);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc('/images/placeholder-city.jpg');
          setIsLoading(false);
        }}
      />
    </div>
  );
};

const HomePage = () => {
  const destinations = [
    {
      id: 'chennai',
      name: 'Chennai',
      description: 'The Gateway to South India',
      image: '/images/cities/chennai.jpg',
      path: '/chennai',
      featured: true
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      description: 'Manchester of South India',
      image: '/images/cities/coimbatore.jpg',
      path: '/coimbatore',
      featured: true
    },
    {
      id: 'madurai',
      name: 'Madurai',
      description: 'Athens of the East',
      image: '/images/cities/madurai.jpg',
      path: '/madurai',
      featured: true
    },
    {
      id: 'kanchipuram',
      name: 'Kanchipuram',
      description: 'City of Thousand Temples',
      image: '/images/cities/kanchipuram.jpg',
      path: '/kanchipuram',
      featured: true
    },
    {
      id: 'ooty',
      name: 'Ooty',
      description: 'Queen of Hill Stations',
      image: '/images/cities/ooty.jpg',
      path: '/ooty',
      featured: true
    }
  ];

  // Filter featured destinations
  const featuredDestinations = destinations.filter(dest => dest.featured);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                Discover Tamil Nadu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Explore the rich cultural heritage, breathtaking landscapes, and vibrant cities of South India's most diverse state.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/map"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explore on Map
              </Link>
              <Link
                to="/#destinations"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div id="destinations" className="py-16 bg-gray-50 dark:bg-gray-800 scroll-mt-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredDestinations.map((place) => (
              <div key={place.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 w-full rounded-t-lg overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={`${place.name} - ${place.description}`}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{place.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{place.description}</p>
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

        {/* Quick Links Section */}
        <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">About Tamil Nadu</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn about our rich heritage, culture, and what makes Tamil Nadu special
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Discover More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="text-center p-6 bg-green-50 dark:bg-green-900/30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">All Destinations</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore all our amazing destinations from beaches to hill stations
                </p>
                <Link
                  to="/destinations"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  View All
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Have questions? We're here to help you plan your perfect trip
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
   </div>
  );
};

export default HomePage;
