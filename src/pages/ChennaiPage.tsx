import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';

const ChennaiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/destinations/chennai.jpg" 
              alt="Chennai" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Chennai</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Chennai</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Chennai, the capital of Tamil Nadu, is known for its beautiful Marina Beach, rich cultural heritage, 
                and vibrant arts scene. It's a major economic and cultural hub in South India, famous for its 
                temples, colonial architecture, and delicious South Indian cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <Link to="/chennai/marina-beach" className="text-gray-700 dark:text-gray-300 hover:underline">Marina Beach</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <Link to="/chennai/kapaleeshwarar-temple" className="text-gray-700 dark:text-gray-300 hover:underline">Kapaleeshwarar Temple</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <Link to="/chennai/fort-st-george" className="text-gray-700 dark:text-gray-300 hover:underline">Fort St. George</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <Link to="/chennai/san-thome-basilica" className="text-gray-700 dark:text-gray-300 hover:underline">San Thome Basilica</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time to Visit:</span>
                    <span className="text-gray-600 dark:text-gray-300">November to February</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Local Cuisine:</span>
                    <span className="text-gray-600 dark:text-gray-300">Idli, Dosa, Filter Coffee</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Language:</span>
                    <span className="text-gray-600 dark:text-gray-300">Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best For:</span>
                    <span className="text-gray-600 dark:text-gray-300">Beach Lovers, History Buffs, Foodies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Travel Tips</h3>
              <p className="text-blue-700 dark:text-blue-300">
                • Try the famous filter coffee at local cafes
                <br />
                • Visit early morning or late evening to avoid the heat
                <br />
                • Use local trains or cabs for convenient travel
                <br />
                • Don't miss the local shopping at T. Nagar
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Explore Chennai</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[13.0827, 80.2707]} // Chennai coordinates
                  zoom={12}
                  markers={[
                    {
                      position: [13.0550, 80.2792],
                      title: 'Marina Beach',
                      description: 'Longest natural urban beach in India'
                    },
                    {
                      position: [13.0629, 80.2709],
                      title: 'Kapaleeshwarar Temple',
                      description: 'Dravidian-style Hindu temple'
                    },
                    {
                      position: [13.0799, 80.2896],
                      title: 'Fort St. George',
                      description: 'First English fortress in India'
                    },
                    {
                      position: [13.0339, 80.2694],
                      title: 'San Thome Basilica',
                      description: 'National shrine and minor basilica'
                    }
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <LocationRestaurants location="Chennai" title="Chennai" />
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link 
                to="/" 
                className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ← Back to Home
              </Link>
              <a 
                href="https://www.tamilnadutourism.tn.gov.in/destinations/chennai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Official Tourism Site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChennaiPage;
