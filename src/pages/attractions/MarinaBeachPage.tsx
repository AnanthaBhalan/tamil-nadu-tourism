import * as React from 'react';
import { Link } from 'react-router-dom';

const MarinaBeachPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/destinations/marina.jpg" 
              alt="Marina Beach" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Marina Beach</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Marina Beach</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Marina Beach is the longest natural urban beach in India and one of the world's longest beaches. 
                Stretching along the Bay of Bengal for 13 kilometers, this iconic Chennai landmark is a vibrant 
                hub of activity from dawn to dusk. The beach is famous for its golden sands, bustling promenade, 
                and stunning sunrise views.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Aquarium and Light House</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Statues of Famous Leaders</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Morning Walkers Paradise</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Beachside Food Stalls</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Length:</span>
                    <span className="text-gray-600 dark:text-gray-300">13 kilometers</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time:</span>
                    <span className="text-gray-600 dark:text-gray-300">Early morning, sunset</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Entry:</span>
                    <span className="text-gray-600 dark:text-gray-300">Free</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Activities:</span>
                    <span className="text-gray-600 dark:text-gray-300">Walking, swimming, food</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Visitor Tips</h3>
              <p className="text-blue-700 dark:text-blue-300">
                • Visit early morning for peaceful walks and stunning sunrises<br />
                • Try local snacks from beachside vendors<br />
                • Be cautious while swimming - currents can be strong<br />
                • Don't miss the evening atmosphere with locals and tourists
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Marina Beach is easily accessible from various parts of Chennai:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Numerous MTC buses connect to Marina Beach</li>
                <li>• By Train: Chennai Beach railway station is nearby</li>
                <li>• By Auto/Taxi: Easily available throughout the city</li>
                <li>• By Car: Parking available near the beach</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/chennai" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Chennai
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

export default MarinaBeachPage;
