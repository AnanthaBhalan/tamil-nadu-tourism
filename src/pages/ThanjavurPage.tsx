import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';

const ThanjavurPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Brihadeeswarar Temple.jpg" 
              alt="Thanjavur" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Thanjavur</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Thanjavur</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Thanjavur, also known as Tanjore, is the "Rice Bowl of Tamil Nadu" and was the capital of the great Chola Empire. 
                The city is renowned for its magnificent Brihadeeswarar Temple, a UNESCO World Heritage Site, classical arts, 
                and the famous Tanjore painting style. It's a cultural hub with rich historical significance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <Link to="/thanjavur/brihadeeswarar-temple" className="text-gray-700 dark:text-gray-300 hover:underline">Brihadeeswarar Temple</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <Link to="/thanjavur/palace" className="text-gray-700 dark:text-gray-300 hover:underline">Thanjavur Palace</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <Link to="/thanjavur/art-gallery" className="text-gray-700 dark:text-gray-300 hover:underline">Art Gallery</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <Link to="/thanjavur/saraswathi-mahal-library" className="text-gray-700 dark:text-gray-300 hover:underline">Saraswathi Mahal Library</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Best Time to Visit: October to March</li>
                  <li>• Famous For: Brihadeeswarar Temple, Tanjore Paintings</li>
                  <li>• Local Cuisine: Thanjavur Special Meals, Filter Coffee</li>
                  <li>• Nearest Airport: Tiruchirappalli International Airport (TRZ)</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapComponent
                  center={[10.7850, 79.1378]}
                  zoom={12}
                  markers={[
                    { position: [10.7850, 79.1378], title: 'Thanjavur City' },
                    { position: [10.7870, 79.1390], title: 'Brihadeeswarar Temple' },
                    { position: [10.7830, 79.1360], title: 'Thanjavur Palace' },
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <LocationRestaurants location="Thanjavur" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanjavurPage;
