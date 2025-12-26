import * as React from 'react';
import { Link } from 'react-router-dom';

const KapaleeshwararTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/destinations/Kapaleeshwarar Temple.jpg" 
              alt="Kapaleeshwarar Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Kapaleeshwarar Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Kapaleeshwarar Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Kapaleeshwarar Temple is a magnificent Hindu temple dedicated to Lord Shiva, located in the 
                vibrant neighborhood of Mylapore in Chennai. This ancient Dravidian architectural masterpiece 
                dates back to the 7th century CE and is one of the most significant religious sites in South India. 
                The temple's towering gopuram (gateway tower) and intricate carvings showcase the rich cultural 
                heritage of Tamil Nadu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">37-meter tall Gopuram</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred Tank (Temple Pond)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Intricate Stone Carvings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Peacock Sanctuary</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">7th century CE</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Deity:</span>
                    <span className="text-gray-600 dark:text-gray-300">Lord Shiva (Kapaleeshwarar)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">Dravidian style</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Festival:</span>
                    <span className="text-gray-600 dark:text-gray-300">Panguni Peruvizha (March)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Temple Timings & Dress Code</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Opening Hours: 6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM<br />
                • Dress Code: Traditional attire recommended<br />
                • Photography: Not allowed inside main sanctum<br />
                • Special Poojas: Available on request
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Mylapore, the temple is well-connected:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Mylapore bus stand is 5 minutes walk</li>
                <li>• By Train: Thirumayilai railway station nearby</li>
                <li>• By Auto/Taxi: Easily available from anywhere in Chennai</li>
                <li>• By Car: Limited parking available nearby</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Nearby Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">San Thome Basilica</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ancient Christian church, 2 km away</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Mylapore Tank</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sacred temple pond, walking distance</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/chennai" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Chennai
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

export default KapaleeshwararTemplePage;
