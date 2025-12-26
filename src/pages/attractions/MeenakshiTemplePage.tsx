import * as React from 'react';
import { Link } from 'react-router-dom';

const MeenakshiTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Meenakshi Amman Temple.jpg" 
              alt="Meenakshi Amman Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Meenakshi Amman Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Meenakshi Amman Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Meenakshi Amman Temple is a spectacular Hindu temple dedicated to Goddess Meenakshi 
                (Parvati) and her consort Lord Sundareswarar (Shiva). This architectural marvel is one of the 
                most important pilgrimage sites in South India and a masterpiece of Dravidian architecture. 
                The temple complex spans 14 acres and features 14 towering gopurams, with the tallest reaching 
                170 feet, adorned with thousands of colorful sculptures depicting Hindu mythology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">14 Magnificent Gopurams</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Golden Lotus Tank</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Thousand Pillar Hall</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Musical Pillars</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">Originally 6th century CE</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">14 acres complex</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">Dravidian style</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Daily Visitors:</span>
                    <span className="text-gray-600 dark:text-gray-300">25,000+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Temple Festivals</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Meenakshi Thirukalyanam (Celestial Wedding) - April/May<br />
                • Chithirai Festival - 12-day celebration in April<br />
                • Navratri Festival - 9 nights dedicated to Goddess<br />
                • Teppam (Float Festival) - January/February
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Madurai city:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Madurai Bus Stand (1 km)</li>
                <li>• By Train: Madurai Junction Railway Station (2 km)</li>
                <li>• By Air: Madurai Airport (12 km)</li>
                <li>• By Auto/Taxi: Available throughout the city</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Darshan Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Morning: 5:00 AM - 12:30 PM<br />
                    Evening: 4:00 PM - 10:00 PM<br />
                    Special Poojas: Check temple schedule
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Dress Code</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Traditional attire required<br />
                    Dhoti for men, Saree/Salwar for women<br />
                    Photography restricted in sanctum
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

export default MeenakshiTemplePage;
