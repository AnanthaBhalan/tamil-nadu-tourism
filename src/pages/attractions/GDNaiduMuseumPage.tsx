import * as React from 'react';
import { Link } from 'react-router-dom';

const GDNaiduMuseumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Ghandi Memorial Museum.jpg" 
              alt="G.D. Naidu Museum" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 bg-opacity-70 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">G.D. Naidu Museum</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About G.D. Naidu Museum</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The G.D. Naidu Museum is a unique institution dedicated to the life and inventions of 
                Gopalaswamy Doraiswamy Naidu, a renowned Indian inventor and engineer from Coimbatore. 
                Known as the "Edison of India," G.D. Naidu made significant contributions to various 
                fields including automobile engineering, electronics, and agriculture. The museum showcases 
                his remarkable inventions and the history of industrial development in South India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Museum Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Original Inventions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Vintage Automobiles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Scientific Instruments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Photography Equipment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Founded:</span>
                    <span className="text-gray-600 dark:text-gray-300">1950</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Civil Aerodrome Post, Coimbatore</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Founder:</span>
                    <span className="text-gray-600 dark:text-gray-300">G.D. Naidu himself</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Specialty:</span>
                    <span className="text-gray-600 dark:text-gray-300">Industrial heritage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Notable Inventions</h3>
              <p className="text-indigo-700 dark:text-indigo-300">
                • First electric motor in India (1937)<br />
                • Mechanical calculator and voting machine<br />
                • Kerosene-run engine and fruit processing machines<br />
                • Camera and photographic equipment innovations
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located near the Coimbatore Civil Aerodrome:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Routes to Aerodrome area</li>
                <li>• By Auto: Available from city center</li>
                <li>• By Car: Well-connected roads</li>
                <li>• By Taxi: 20 minutes from Railway Junction</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    10:00 AM - 1:00 PM<br />
                    2:00 PM - 5:00 PM<br />
                    Closed on Sundays and public holidays
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Educational Value</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    • School tours organized<br />
                    • Technical workshops<br />
                    • Innovation inspiration<br />
                    • Historical significance
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/coimbatore" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Coimbatore
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:bg-gray-800 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default GDNaiduMuseumPage;
