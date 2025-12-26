import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import LocationRestaurants from '../components/restaurants/LocationRestaurants';

const KanchipuramPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Kamakshi Amman Temple.jpg" 
              alt="Kanchipuram" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Kanchipuram</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Kanchipuram</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Kanchipuram, also known as the "City of Thousand Temples," is one of the seven sacred cities of India. 
                Famous for its ancient temples, rich history, and exquisite silk sarees, Kanchipuram is a major pilgrimage 
                center and a treasure trove of Dravidian architecture and culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    <Link to="/kanchipuram/kamakshi-amman-temple" className="text-gray-700 dark:text-gray-300 hover:underline">
                      Kamakshi Amman Temple
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    <Link to="/kanchipuram/ekambareswarar-temple" className="text-gray-700 dark:text-gray-300 hover:underline">
                      Ekambareswarar Temple
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    <Link to="/kanchipuram/varadharaja-perumal-temple" className="text-gray-700 dark:text-gray-300 hover:underline">
                      Varadharaja Perumal Temple
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-2">•</span>
                    <Link to="/kanchipuram/silk-sarees" className="text-gray-700 dark:text-gray-300 hover:underline">
                      Kanchipuram Silk Sarees
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Best Time to Visit: October to March</li>
                  <li>• Famous For: Temples, Silk Sarees</li>
                  <li>• Local Cuisine: Idli, Dosa, Pongal, Filter Coffee</li>
                  <li>• Nearest Airport: Chennai International Airport (MAA)</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapComponent 
                  center={[12.8342, 79.7036]} 
                  zoom={12}
                  markers={[
                    { position: [12.8479, 79.7038], title: 'Kamakshi Amman Temple' },
                    { position: [12.8475, 79.6998], title: 'Ekambareswarar Temple' },
                    { position: [12.8365, 79.7066], title: 'Varadharaja Perumal Temple' },
                  ]}
                />
              </div>
            </div>

            {/* Restaurants Section */}
            <div className="mt-8">
              <LocationRestaurants location="Kanchipuram" title="Kanchipuram" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                to="/map" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg text-center transition-colors"
              >
                View on Map
              </Link>
              <Link 
                to="/" 
                className="bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-6 rounded-lg text-center transition-colors"
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

export default KanchipuramPage;
