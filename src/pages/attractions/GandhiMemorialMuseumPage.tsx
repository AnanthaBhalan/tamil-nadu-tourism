import * as React from 'react';
import { Link } from 'react-router-dom';

const GandhiMemorialMuseumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Ghandi Memorial Museum.jpg" 
              alt="Gandhi Memorial Museum" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Gandhi Memorial Museum</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Gandhi Memorial Museum</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Gandhi Memorial Museum in Madurai is a living memorial to Mahatma Gandhi, one of the most 
                influential leaders in India's independence movement. Established in 1959, this museum houses 
                a remarkable collection of artifacts, photographs, and personal belongings of Gandhi. The 
                museum building itself is a historic structure, having been the palace of Rani Mangammal 
                during the Nayak dynasty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Museum Collections</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Personal belongings of Gandhi</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Rare photographs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Letters and manuscripts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Freedom movement artifacts</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Established:</span>
                    <span className="text-gray-600 dark:text-gray-300">1959</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Tamukkam Palace, Madurai</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Historic Building:</span>
                    <span className="text-gray-600 dark:text-gray-300">Nayak dynasty palace</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Significance:</span>
                    <span className="text-gray-600 dark:text-gray-300">Gandhi's blood-stained dhoti</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Significance</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Gandhi visited Madurai in 1921 and 1946<br />
                • Houses the blood-stained cloth from assassination<br />
                • Displays Gandhi's correspondence with world leaders<br />
                • Features South India's freedom movement history
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the historic Tamukkam Palace:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Routes to Tamukkam Palace area</li>
                <li>• By Auto: Available from city center and railway station</li>
                <li>• By Car: Well-connected roads with parking</li>
                <li>• Walking: 15 minutes from Meenakshi Temple</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    10:00 AM - 1:00 PM<br />
                    2:00 PM - 5:30 PM<br />
                    Open all days except national holidays
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Entry Fee</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    • Adults: ₹5<br />
                    • Children: ₹2<br />
                    • Foreigners: ₹50<br />
                    • Camera: ₹25
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

export default GandhiMemorialMuseumPage;
