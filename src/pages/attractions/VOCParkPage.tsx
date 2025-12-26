import * as React from 'react';
import { Link } from 'react-router-dom';

const VOCParkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/VOC park.jpg" 
              alt="VOC Park & Zoo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">VOC Park & Zoo</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About VOC Park & Zoo</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                VOC Park & Zoo, officially known as V.O. Chidambaram Pillai Park, is a popular recreational 
                destination in Coimbatore. Named after the prominent freedom fighter V.O. Chidambaram Pillai, 
                this park combines lush green spaces with a small zoo, making it an ideal spot for families 
                and nature enthusiasts. The park offers a peaceful escape from the bustling city life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Park Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Children's Play Area</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Mini Zoo with Animals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Beautiful Gardens</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Walking Paths</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Named After:</span>
                    <span className="text-gray-600 dark:text-gray-300">V.O. Chidambaram Pillai</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Peelamedu, Coimbatore</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time:</span>
                    <span className="text-gray-600 dark:text-gray-300">Early morning, evening</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Entry:</span>
                    <span className="text-gray-600 dark:text-gray-300">Nominal fee</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Zoo Highlights</h3>
              <p className="text-green-700 dark:text-green-300">
                • Small collection of local wildlife<br />
                • Birds and small mammals<br />
                • Educational displays about animals<br />
                • Well-maintained enclosures
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the Peelamedu area of Coimbatore:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Numerous buses stop at VOC Park</li>
                <li>• By Auto: Available from city center</li>
                <li>• By Car: Parking facilities available</li>
                <li>• Walking distance from Peelamedu bus stand</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Park: 6:00 AM - 8:00 PM<br />
                    Zoo: 9:00 AM - 5:00 PM<br />
                    Closed on Mondays for maintenance
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Facilities</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    • Drinking water<br />
                    • Rest areas<br />
                    • Snack vendors<br />
                    • Clean restrooms
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/coimbatore" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Coimbatore
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

export default VOCParkPage;
