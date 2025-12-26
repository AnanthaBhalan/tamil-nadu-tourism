import * as React from 'react';
import { Link } from 'react-router-dom';

const MarudhamalaiTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Marudhamalai Temple.jpg" 
              alt="Marudhamalai Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Marudhamalai Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Marudhamalai Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Marudhamalai Temple is an ancient Hindu temple dedicated to Lord Murugan, located atop a 
                scenic hill in Coimbatore. This sacred shrine, situated at an altitude of 500 feet, offers 
                breathtaking views of the surrounding Western Ghats. The temple is known for its spiritual 
                significance and architectural beauty, attracting thousands of devotees and tourists alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Hilltop Temple Location</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Stone Carvings & Sculptures</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred Spring (Pambatti Siddhar)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Panoramic Mountain Views</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Deity:</span>
                    <span className="text-gray-600 dark:text-gray-300">Lord Murugan (Subramanya)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Altitude:</span>
                    <span className="text-gray-600 dark:text-gray-300">500 feet above sea level</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">Traditional Dravidian</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Festival:</span>
                    <span className="text-gray-600 dark:text-gray-300">Thai Poosam (January)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Spiritual Significance</h3>
              <p className="text-green-700 dark:text-green-300">
                • One of the six abodes of Lord Murugan (Arupadai Veedu)<br />
                • Associated with Pambatti Siddhar, a renowned saint<br />
                • Believed to fulfill devotees' wishes and prayers<br />
                • Special rituals performed on full moon days
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located 12 km from Coimbatore city:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Direct buses from Coimbatore bus stand</li>
                <li>• By Auto/Taxi: 30-minute ride from city center</li>
                <li>• By Car: Well-connected via Palakkad Road</li>
                <li>• Hill Climb: 800 steps or vehicle road available</li>
              </ul>
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

export default MarudhamalaiTemplePage;
