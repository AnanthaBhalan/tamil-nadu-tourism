import * as React from 'react';
import { Link } from 'react-router-dom';

const DoddabettaPeakPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Doddabetta Peak.jpg" 
              alt="Doddabetta Peak" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Doddabetta Peak</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Doddabetta Peak</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Doddabetta Peak is the highest mountain in the Nilgiri Hills, standing at an impressive 
                8,650 feet above sea level. This majestic peak offers breathtaking panoramic views of the 
                surrounding valleys, tea plantations, and distant mountain ranges. The name "Doddabetta" 
                means "Big Mountain" in the local language, and it serves as a popular destination for 
                nature enthusiasts and photographers seeking spectacular vistas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Peak Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">360° Panoramic Views</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Telescope Viewing Tower</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Nilgiri Mountain Railway View</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Shola Forest Ecosystem</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Height:</span>
                    <span className="text-gray-600 dark:text-gray-300">8,650 feet (2,637 meters)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Distance:</span>
                    <span className="text-gray-600 dark:text-gray-300">10 km from Ooty</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Best Time:</span>
                    <span className="text-gray-600 dark:text-gray-300">March to June, Sep-Nov</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Climate:</span>
                    <span className="text-gray-600 dark:text-gray-300">Cool throughout year</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Viewing Experience</h3>
              <p className="text-green-700 dark:text-green-300">
                • Spectacular sunrise and sunset views<br />
                • View of three states (Tamil Nadu, Kerala, Karnataka)<br />
                • Tea gardens and eucalyptus forests<br />
                • Cloud formations and misty valleys
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located on the Ooty-Kotagiri Road:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Regular buses from Ooty bus stand</li>
                <li>• By Taxi: 30-minute scenic drive from Ooty</li>
                <li>• By Car: Well-maintained road access</li>
                <li>• By Trek: Popular trekking route for adventure seekers</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Facilities</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    • Telescope tower<br />
                    • Parking area<br />
                    • Small snack shops<br />
                    • Rest areas
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Photography Tips</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    • Early morning for clear views<br />
                    • Carry warm clothing<br />
                    • Best light: Golden hours<br />
                    • Wide-angle lens recommended
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

export default DoddabettaPeakPage;
