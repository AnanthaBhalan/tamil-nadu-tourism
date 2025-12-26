import * as React from 'react';
import { Link } from 'react-router-dom';

const FortStGeorgePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Fort St. George.jpg" 
              alt="Fort St. George" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Fort St. George</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Fort St. George</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Fort St. George is a historic fortress built in 1644 by the British East India Company, marking the 
                beginning of Madras (now Chennai) as a modern city. This imposing structure served as the first 
                British fortress in India and today houses the Tamil Nadu Legislative Assembly and Secretariat. 
                The fort stands as a testament to Chennai's colonial heritage and architectural grandeur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">St. Mary's Church (1678)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Fort Museum</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Wellesley House</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Flagstaff (149 ft tall)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">1644 by British East India Co.</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">146 acres</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">British colonial style</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Significance:</span>
                    <span className="text-gray-600 dark:text-gray-300">First British settlement in India</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Museum Highlights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                • Collection of British-era artifacts and paintings<br />
                • Weapons, coins, and medals from colonial period<br />
                • Portraits of British governors and officials<br />
                • Historical documents and manuscripts
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Chennai's business district:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Fort St. George bus stop directly outside</li>
                <li>• By Train: Chennai Beach railway station (1 km)</li>
                <li>• By Metro: Chennai Central metro station nearby</li>
                <li>• By Auto/Taxi: Well-connected throughout the city</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Museum: 10:00 AM - 5:00 PM<br />
                    Closed on Fridays and public holidays
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Entry Fee</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Indians: ₹15<br />
                    Foreigners: ₹200<br />
                    Camera fee: ₹25
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/chennai" 
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Chennai
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-gray-600 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default FortStGeorgePage;
