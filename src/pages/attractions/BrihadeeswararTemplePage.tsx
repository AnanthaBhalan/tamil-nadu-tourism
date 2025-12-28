import * as React from 'react';
import { Link } from 'react-router-dom';

const BrihadeeswararTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Brihadeeswarar Temple.jpg" 
              alt="Brihadeeswarar Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Brihadeeswarar Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Brihadeeswarar Temple, also known as Peruvudaiyar Kovil, is a UNESCO World Heritage Site and one of the greatest achievements of Dravidian architecture. 
                Built by the Chola Emperor Raja Raja Chola I in 1010 AD, this magnificent temple is dedicated to Lord Shiva and stands as a testament to the architectural brilliance of ancient India.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The temple is famous for its massive 66-meter tall vimana (tower) which is one of the tallest in the world. The entire temple structure is built using granite, 
                with the main tower weighing approximately 80 tons. The temple complex includes a massive Nandi (bull statue) carved from a single stone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">World's tallest vimana (temple tower) at 66 meters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Massive Nandi statue carved from single stone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Intricate stone carvings and sculptures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">UNESCO World Heritage Site</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Visitor Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Entry Fee:</strong> ₹50 for Indians, ₹250 for foreigners</li>
                  <li>• <strong>Timings:</strong> 6:00 AM - 8:30 PM</li>
                  <li>• <strong>Best Time:</strong> October to March</li>
                  <li>• <strong>Photography:</strong> Allowed (free)</li>
                  <li>• <strong>Dress Code:</strong> Traditional attire recommended</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The temple showcases the pinnacle of Chola architecture with its unique design and engineering marvels. The main sanctum (garbhagriha) houses a massive Shiva Lingam, 
                and the temple walls are adorned with exquisite carvings depicting various deities, mythological scenes, and dance poses of Lord Shiva.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The temple's shadow never falls on the ground at noon, a remarkable architectural achievement. The complex includes multiple shrines, mandapams (halls), 
                and a large temple tank that adds to its spiritual significance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Festivals</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The temple celebrates several festivals throughout the year with great fervor:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Masi Magam:</strong> February-March - Grand procession of deities</li>
                <li>• <strong>Panguni Uthiram:</strong> March-April - Divine wedding ceremony</li>
                <li>• <strong>Arudra Darshan:</strong> December-January - Special abhishekam ceremony</li>
                <li>• <strong>Navaratri:</strong> October - Nine-night festival dedicated to Goddess</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Pro Tip</h3>
              <p className="text-purple-700 dark:text-purple-300">
                Visit early morning to witness the sunrise illuminating the temple tower. Don't miss the sound and light show in the evening 
                that brings the temple's history to life.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/thanjavur" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Thanjavur
              </Link>
              
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Thanjavur, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrihadeeswararTemplePage;
