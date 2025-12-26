import * as React from 'react';
import { Link } from 'react-router-dom';

const NilgiriMountainRailwayPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Nilgiri mountain railway.jpg" 
              alt="Nilgiri Mountain Railway" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Nilgiri Mountain Railway</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Nilgiri Mountain Railway</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Nilgiri Mountain Railway is a UNESCO World Heritage Site and one of India's most 
                scenic mountain railways. Built in 1908, this engineering marvel connects Mettupalayam 
                to Ooty through breathtaking landscapes, steep gradients, and charming stations. The 
                toy train journey offers panoramic views of tea gardens, forests, and mountains, making 
                it one of the most memorable travel experiences in South India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Journey Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">208 bends and 16 tunnels</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Rack and pinion system</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Steam locomotive experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Stunning valley views</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built in:</span>
                    <span className="text-gray-600 dark:text-gray-300">1908</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Distance:</span>
                    <span className="text-gray-600 dark:text-gray-300">46 km</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Duration:</span>
                    <span className="text-gray-600 dark:text-gray-300">5 hours</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">UNESCO Site:</span>
                    <span className="text-gray-600 dark:text-gray-300">Since 2005</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Route Stations</h3>
              <p className="text-green-700 dark:text-green-300">
                • Mettupalayam (330m) - Starting point<br />
                • Kallar - First steep climb begins<br />
                • Coonoor (1,856m) - Mid-way station<br />
                • Ooty (2,240m) - Final destination
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Boarding points and access:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Train: Board at Mettupalayam railway station</li>
                <li>• By Bus: Regular buses from Coimbatore to Mettupalayam</li>
                <li>• By Car: Drive to Mettupalayam (45 km from Coimbatore)</li>
                <li>• By Taxi: Available from Coimbatore airport and city</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Train Schedule</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Departure: 7:10 AM from Mettupalayam<br />
                    Arrival: 12:15 PM at Ooty<br />
                    Return: 2:00 PM from Ooty<br />
                    Subject to weather conditions
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Ticket Classes</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    • First Class: ₹300-500<br />
                    • Second Class: ₹100-200<br />
                    • Unreserved: ₹30-50<br />
                    • Advance booking recommended
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ooty" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Ooty
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 dark:bg-gray-800 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default NilgiriMountainRailwayPage;
