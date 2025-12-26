import * as React from 'react';
import { Link } from 'react-router-dom';

const OotyLakePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Kodaikanal Lake.jpg" 
              alt="Ooty Lake & Boat House" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Ooty Lake & Boat House</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Ooty Lake & Boat House</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ooty Lake is a stunning artificial lake nestled amidst the picturesque Nilgiri Hills, 
                offering breathtaking views and serene boating experiences. Built in 1824 by John Sullivan, 
                the then Collector of Coimbatore, this L-shaped lake spans 65 acres and is surrounded by 
                lush green Eucalyptus trees. The boat house at the lake provides various boating options 
                making it one of Ooty's most popular tourist attractions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Boating Activities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Paddle boats</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Row boats</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Motor boats</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Shikara boats</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built in:</span>
                    <span className="text-gray-600 dark:text-gray-300">1824</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">65 acres</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Shape:</span>
                    <span className="text-gray-600 dark:text-gray-300">L-shaped</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Founder:</span>
                    <span className="text-gray-600 dark:text-gray-300">John Sullivan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Lake Features</h3>
              <p className="text-green-700 dark:text-green-300">
                • Surrounded by Eucalyptus trees<br />
                • Mini train ride around the lake<br />
                • Children's park and garden<br />
                • Horse riding facilities nearby
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Ooty town:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: All local buses stop near the lake</li>
                <li>• By Auto: Available from Ooty bus stand and railway station</li>
                <li>• By Car: Well-connected roads with parking facilities</li>
                <li>• Walking: 1 km from Ooty town center</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Boating: 9:00 AM - 6:00 PM<br />
                    Lake View: Open all day<br />
                    Closed during heavy rain
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Boating Charges</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    • Paddle Boat: ₹150-200 per hour<br />
                    • Row Boat: ₹100-150 per hour<br />
                    • Motor Boat: ₹250-350 per ride<br />
                    • Shikara: ₹200-300 per ride
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ooty" 
                className="bg-green-600 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default OotyLakePage;
