import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';

const OotyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/destinations/ooty.jpg" 
              alt="Ooty" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Ooty</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Ooty</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nestled in the Nilgiri Hills, Ooty (Udhagamandalam) is a charming hill station known for its 
                tea plantations, colonial architecture, and pleasant climate. Often called the "Queen of Hill Stations," 
                it's a perfect getaway with its scenic beauty, botanical gardens, and cool mountain air.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <Link to="/ooty/botanical-gardens" className="text-gray-700 dark:text-gray-300 hover:underline">Ooty Botanical Gardens</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <Link to="/ooty/nilgiri-mountain-railway" className="text-gray-700 dark:text-gray-300 hover:underline">Nilgiri Mountain Railway</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <Link to="/ooty/doddabetta-peak" className="text-gray-700 dark:text-gray-300 hover:underline">Doddabetta Peak</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <Link to="/ooty/lake-boat-house" className="text-gray-700 dark:text-gray-300 hover:underline">Ooty Lake & Boat House</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time to Visit:</span>
                    <span className="text-gray-600 dark:text-gray-300">April to June, September to November</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Local Delicacies:</span>
                    <span className="text-gray-600 dark:text-gray-300">Ooty Tea, Chocolates, Homemade Chocolates</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Language:</span>
                    <span className="text-gray-600 dark:text-gray-300">Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best For:</span>
                    <span className="text-gray-600 dark:text-gray-300">Nature Lovers, Honeymoon, Family Trips</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Travel Tips</h3>
              <p className="text-green-700 dark:text-green-300">
                • Carry warm clothing as temperatures can drop in the evening
                <br />
                • Book the Nilgiri Mountain Railway toy train in advance
                <br />
                • Visit tea estates for fresh tea tasting
                <br />
                • Try local homemade chocolates and cheese
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Explore Ooty</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[11.4102, 76.6950]} // Ooty coordinates
                  zoom={13}
                  markers={[
                    {
                      position: [11.4229, 76.7129],
                      title: 'Ooty Botanical Gardens',
                      description: 'Beautiful gardens with diverse plant species'
                    },
                    {
                      position: [11.4099, 76.6962],
                      title: 'Ooty Lake',
                      description: 'Scenic lake with boating facilities'
                    },
                    {
                      position: [11.4056, 76.5952],
                      title: 'Doddabetta Peak',
                      description: 'Highest peak in the Nilgiri Mountains'
                    },
                    {
                      position: [11.3763, 76.8019],
                      title: 'Pykara Lake',
                      description: 'Serene lake with boating and scenic views'
                    },
                    {
                      position: [11.4194, 76.7186],
                      title: 'Ooty Rose Garden',
                      description: 'Largest rose garden in India with thousands of varieties'
                    }
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <LocationRestaurants location="Ooty" title="Ooty" />
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link 
                to="/" 
                className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ← Back to Home
              </Link>
              <a 
                href="https://www.tamilnadutourism.tn.gov.in/destinations/udhagamandalam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
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

export default OotyPage;
