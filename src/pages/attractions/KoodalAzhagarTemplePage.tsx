import * as React from 'react';
import { Link } from 'react-router-dom';

const KoodalAzhagarTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Koodal Azhagar Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Koodal Azhagar Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Koodal Azhagar Temple is an ancient Hindu temple dedicated to Lord Vishnu, located in the 
                heart of Madurai city. This magnificent temple is one of the 108 Divya Desams (sacred Vishnu 
                temples) mentioned in the works of the Alvars (Tamil poet-saints). The temple showcases 
                exquisite Dravidian architecture and holds immense religious significance for Vaishnavites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Three-tiered Rajagopuram</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Beautiful stone sculptures</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Ancient Tamil inscriptions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred temple tank</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built by:</span>
                    <span className="text-gray-600 dark:text-gray-300">Pandya dynasty</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Near Periyar Bus Stand</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Main Deity:</span>
                    <span className="text-gray-600 dark:text-gray-300">Lord Koodal Azhagar</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Divya Desam:</span>
                    <span className="text-gray-600 dark:text-gray-300">One of 108 sacred temples</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Spiritual Significance</h3>
              <p className="text-orange-700 dark:text-orange-300">
                • Mentioned in Nalayira Divya Prabandham<br />
                • Periyalvar and Thirumangai Alvar sang hymns<br />
                • Lord Vishnu in three postures (sitting, standing, reclining)<br />
                • Connected to Madurai's ancient history
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Madurai city:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: All city buses stop nearby</li>
                <li>• By Auto: Available from railway station</li>
                <li>• By Car: Easy access from main roads</li>
                <li>• Walking: 10 minutes from Meenakshi Temple</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Morning: 6:00 AM - 12:00 PM<br />
                    Evening: 4:00 PM - 9:00 PM<br />
                    Special poojas on festival days
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Festivals</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    • Brahmotsavam (April-May)<br />
                    • Vaikunta Ekadasi<br />
                    • Garuda Sevai<br />
                    • Purattasi Saturdays
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

export default KoodalAzhagarTemplePage;
