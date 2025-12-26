import * as React from 'react';
import { Link } from 'react-router-dom';

const SanThomeBasilicaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/San Thome Basilica.jpg" 
              alt="San Thome Basilica" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">San Thome Basilica</h1>
            </div>
          </div>
          
          <div className="p-6">
                        <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About San Thome Basilica</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                San Thome Basilica is a revered Roman Catholic minor basilica built over the tomb of St. Thomas, 
                one of the twelve apostles of Jesus Christ. This magnificent white Gothic-style church stands as 
                one of only three basilicas in the world built over the tomb of an apostle. The current structure, 
                built in 1896, is a stunning example of neo-Gothic architecture and serves as an important 
                pilgrimage site for Christians worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Basilica Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Tomb of St. Thomas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Stained Glass Windows</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">155 feet tall spire</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Underground Chapel</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">1896 (Neo-Gothic style)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Original:</span>
                    <span className="text-gray-600 dark:text-gray-300">Built over 1st century tomb</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Status:</span>
                    <span className="text-gray-600 dark:text-gray-300">National Monument</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Feast Day:</span>
                    <span className="text-gray-600 dark:text-gray-300">July 3rd (St. Thomas Day)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Spiritual Significance</h3>
              <p className="text-purple-700 dark:text-purple-300">
                • Believed to house the remains of St. Thomas the Apostle<br />
                • Important pilgrimage site for Christians globally<br />
                • Museum displaying artifacts related to St. Thomas<br />
                • Regular masses and special services held daily
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the historic San Thome area of Chennai:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: San Thome bus stop nearby</li>
                <li>• By Train: Chennai Beach railway station (2 km)</li>
                <li>• By Auto/Taxi: Easily available from city center</li>
                <li>• By Car: Limited parking available</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Mass Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Weekdays: 6:00 AM, 7:00 AM, 6:00 PM<br />
                    Sundays: Additional masses at 8:00 AM, 10:00 AM
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Visiting Hours</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Church: 6:00 AM - 8:00 PM<br />
                    Museum: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Nearby Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Kapaleeshwarar Temple</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ancient Shiva temple, 2 km away</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Marina Beach</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">World's second longest beach, 3 km away</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/chennai" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Chennai
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:bg-gray-800 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default SanThomeBasilicaPage;
