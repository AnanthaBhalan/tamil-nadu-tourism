import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';

const MaduraiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/destinations/madurai.jpg" 
              alt="Madurai" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Madurai</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Madurai</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Known as the "Athens of the East," Madurai is one of the oldest continuously inhabited cities in the world. 
                It's famous for its magnificent Meenakshi Amman Temple, rich cultural heritage, and traditional Tamil architecture. 
                The city is a major pilgrimage and cultural center in Tamil Nadu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <Link to="/madurai/meenakshi-temple" className="text-gray-700 dark:text-gray-300 hover:underline">Meenakshi Amman Temple</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <Link to="/madurai/thirumalai-nayakar-palace" className="text-gray-700 dark:text-gray-300 hover:underline">Thirumalai Nayakkar Palace</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <Link to="/madurai/gandhi-memorial-museum" className="text-gray-700 dark:text-gray-300 hover:underline">Gandhi Memorial Museum</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <Link to="/madurai/koodal-azhagar-temple" className="text-gray-700 dark:text-gray-300 hover:underline">Koodal Azhagar Temple</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time to Visit:</span>
                    <span className="text-gray-600 dark:text-gray-300">October to March</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Local Cuisine:</span>
                    <span className="text-gray-600 dark:text-gray-300">Jigarthanda, Paruthi Paal</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Language:</span>
                    <span className="text-gray-600 dark:text-gray-300">Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best For:</span>
                    <span className="text-gray-600 dark:text-gray-300">Temple Lovers, History Enthusiasts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Travel Tips</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Visit Meenakshi Temple early morning to avoid crowds
                <br />
                • Try the famous Madurai Jigarthanda drink
                <br />
                • Respect temple dress codes and photography rules
                <br />
                • Explore the local markets for traditional handicrafts
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Explore Madurai</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[9.9252, 78.1198]} // Madurai coordinates
                  zoom={13}
                  markers={[
                    {
                      position: [9.9196, 78.1193],
                      title: 'Meenakshi Amman Temple',
                      description: 'Iconic Hindu temple with towering gopurams'
                    },
                    {
                      position: [9.9197, 78.1212],
                      title: 'Thirumalai Nayakkar Palace',
                      description: '17th-century palace with grand architecture'
                    },
                    {
                      position: [9.9390, 78.1219],
                      title: 'Gandhi Memorial Museum',
                      description: 'Museum dedicated to Mahatma Gandhi'
                    },
                    {
                      position: [9.9358, 78.1354],
                      title: 'Koodal Azhagar Temple',
                      description: 'Ancient Vishnu temple with intricate carvings'
                    }
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <LocationRestaurants location="Madurai" title="Madurai" />
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link 
                to="/" 
                className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ← Back to Home
              </Link>
              <a 
                href="https://www.tamilnadutourism.tn.gov.in/destinations/madurai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
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

export default MaduraiPage;
