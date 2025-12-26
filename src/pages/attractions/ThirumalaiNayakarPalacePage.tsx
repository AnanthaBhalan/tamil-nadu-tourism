import * as React from 'react';
import { Link } from 'react-router-dom';

const ThirumalaiNayakarPalacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Thirumalai Nayak Palace.jpg" 
              alt="Thirumalai Nayakar Palace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Thirumalai Nayakar Palace</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Thirumalai Nayakar Palace</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Thirumalai Nayakar Palace is a magnificent 17th-century palace built by King Thirumalai Nayak, 
                one of the most prominent rulers of Madurai's Nayaka dynasty. This architectural marvel showcases 
                a unique blend of Dravidian and Islamic architectural styles. The palace was originally four 
                times larger than its present size, with extensive complexes that included royal residences, 
                dance halls, and gardens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Palace Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Majestic Circular Courtyard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Intricate Stucco Work</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Tall 82-foot Columns</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sound and Light Show</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">1636 AD</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Builder:</span>
                    <span className="text-gray-600 dark:text-gray-300">King Thirumalai Nayak</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">Dravidian-Islamic fusion</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Restoration:</span>
                    <span className="text-gray-600 dark:text-gray-300">19th century by Lord Napier</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Architectural Marvels</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Celestial Courtyard with 248 pillars<br />
                • Dance Hall with royal throne platform<br />
                • Ornamental brackets with yali figures<br />
                • Paintings depicting Hindu mythology
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located 2 km southeast of Meenakshi Temple:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Direct buses from Madurai bus stand</li>
                <li>• By Auto: 10-minute ride from city center</li>
                <li>• By Taxi: Available throughout the city</li>
                <li>• Walking: 20 minutes from Meenakshi Temple</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    9:00 AM - 1:00 PM<br />
                    2:00 PM - 5:00 PM<br />
                    Closed on Government Holidays
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Sound & Light Show</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    English: 6:45 PM<br />
                    Tamil: 8:15 PM<br />
                    Tickets: ₹50 for adults
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/madurai" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Madurai
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:bg-gray-800 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default ThirumalaiNayakarPalacePage;
