import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';
import { useEffect, useState } from 'react';

const CoimbatorePage: React.FC = () => {
  const [foodPlaces, setFoodPlaces] = useState<any[]>([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/food/Coimbatore')
      .then(res => res.json())
      .then(data => setFoodPlaces(data));
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 bg-green-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Coimbatore</h1>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Coimbatore</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Coimbatore, often referred to as the "Manchester of South India," is a major industrial city in Tamil Nadu.
                Known for its pleasant climate, educational institutions, and textile industry, Coimbatore is also a gateway
                to the picturesque Nilgiri Hills and offers a mix of natural beauty and urban development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <Link to="/location/coimbatore-marudhamalai" className="text-blue-600 hover:underline">
                      Marudhamalai Temple
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <Link to="/location/coimbatore-voc-park" className="text-blue-600 hover:underline">
                      VOC Park & Zoo
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <Link to="/location/coimbatore-gedee" className="text-blue-600 hover:underline">
                      G.D. Naidu Museum
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <Link to="/location/coimbatore-black-thunder" className="text-blue-600 hover:underline">
                      Black Thunder Water Theme Park
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Best Time to Visit: October to March</li>
                  <li>• Famous For: Textile Industry, Educational Institutions</li>
                  <li>• Local Cuisine: Kalan, Kootu, Pongal</li>
                  <li>• Nearest Airport: Coimbatore International Airport (CJB)</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapComponent
                  center={[11.0168, 76.9558]}
                  zoom={12}
                  markers={[
                    { position: [11.0723, 76.9922], title: 'Coimbatore Junction' },
                    { position: [11.0106, 76.9671], title: 'Marudhamalai Temple' },
                    { position: [11.0227, 76.9419], title: 'VOC Park' },
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">
                Places to Eat in Coimbatore
              </h2>

              <p className="text-gray-600 mb-6">
                The system displays a curated list of popular dining locations in Coimbatore,
                allowing users to explore authentic local culinary experiences.
              </p>
              <LocationRestaurants location="Coimbatore" title="Coimbatore" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/map"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
              >
                View on Map
              </Link>
              <Link
                to="/"
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg text-center transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoimbatorePage;
