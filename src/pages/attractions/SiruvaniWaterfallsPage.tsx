import * as React from 'react';
import { Link } from 'react-router-dom';

const SiruvaniWaterfallsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Siruvani Waterfalls.jpg" 
              alt="Siruvani Waterfalls" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Siruvani Waterfalls</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Siruvani Waterfalls</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Siruvani Waterfalls is a breathtaking natural wonder located in the Siruvani Hills, 
                known for having some of the tastiest water in the world. The falls cascade down from 
                a height of 60 feet amidst dense forests and rocky terrain, creating a spectacular 
                sight and a serene atmosphere. This pristine location is perfect for nature lovers 
                and those seeking a peaceful retreat from city life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Natural Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">60 Feet High Waterfall</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">World's Tastiest Water</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Dense Forest Surroundings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Rocky Natural Pools</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Height:</span>
                    <span className="text-gray-600 dark:text-gray-300">60 feet</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Distance:</span>
                    <span className="text-gray-600 dark:text-gray-300">37 km from Coimbatore</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Season:</span>
                    <span className="text-gray-600 dark:text-gray-300">Post-monsoon (Oct-Feb)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Water Source:</span>
                    <span className="text-gray-600 dark:text-gray-300">Siruvani River</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Visitor Experience</h3>
              <p className="text-blue-700 dark:text-blue-300">
                • Trekking through dense forest trails<br />
                • Natural swimming in crystal-clear pools<br />
                • Photography opportunities with scenic backdrops<br />
                • Picnic spots and relaxation areas
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the Siruvani Hills near the Kerala border:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Limited bus service, better to hire vehicle</li>
                <li>• By Taxi: 1.5-hour journey from Coimbatore</li>
                <li>• By Car: Private vehicle recommended</li>
                <li>• Trek: Moderate trekking required from parking</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Important Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Best Time to Visit</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    October to February<br />
                    Avoid monsoon season (heavy rains)
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Safety Notes</h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Wear proper trekking shoes<br />
                    Carry water and snacks<br />
                    Visit during daylight hours
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/coimbatore" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Coimbatore
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                More Destinations
              </Link>
              <Link 
                to="/" 
                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiruvaniWaterfallsPage;
