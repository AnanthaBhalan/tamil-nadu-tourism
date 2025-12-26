import * as React from 'react';
import { Link } from 'react-router-dom';

const OotyBotanicalGardensPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/ooty botanical gardens.jpg" 
              alt="Ooty Botanical Gardens" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Ooty Botanical Gardens</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Ooty Botanical Gardens</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Government Botanical Gardens in Ooty is a stunning 55-acre garden showcasing the rich 
                floral diversity of the Nilgiri Hills. Established in 1848 by the Government of Tamil Nadu, 
                these gardens are laid out in a beautiful terraced pattern with well-manicured lawns, 
                exotic plants, and rare trees. The gardens serve as a living museum of plant life and 
                are a paradise for nature lovers and botany enthusiasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Garden Sections</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Lower Garden - Formal Layout</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">New Garden - Exotic Species</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Italian Garden - Unique Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Nursery - Plant Conservation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Established:</span>
                    <span className="text-gray-600 dark:text-gray-300">1848</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">55 acres</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Plant Species:</span>
                    <span className="text-gray-600 dark:text-gray-300">1000+ varieties</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Annual Visitors:</span>
                    <span className="text-gray-600 dark:text-gray-300">2 million+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Key Attractions</h3>
              <p className="text-green-700 dark:text-green-300">
                • 20 Million Year Old Fossil Tree<br />
                • Glass House with Annual Flower Show<br />
                • Rose Garden with 300+ varieties<br />
                • Japanese Garden and Bonsai Collection
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located on the slopes of Doddabetta Peak:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Ooty Bus Stand (1 km)</li>
                <li>• By Train: Ooty Railway Station (2 km)</li>
                <li>• By Taxi: Available from town center</li>
                <li>• Walking: Pleasant 15-minute walk from town</li>
              </ul>
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

export default OotyBotanicalGardensPage;
