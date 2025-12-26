import * as React from 'react';
import { Link } from 'react-router-dom';

const EkambareswararTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Ekambareswarar Temple.jpg" 
              alt="Ekambareswarar Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Ekambareswarar Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Ekambareswarar Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ekambareswarar Temple is one of the most sacred and ancient temples in Kanchipuram, 
                dedicated to Lord Shiva. This magnificent temple is one of the Pancha Bootha Sthalams, 
                representing the element of Earth (Prithvi). Spread over 23 acres, it features one of the 
                tallest temple towers (gopurams) in India, standing at 57 meters high. The temple's 
                history dates back over 1,500 years and has been patronized by various dynasties including 
                the Pallavas, Cholas, and Vijayanagara kings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">57-meter tall Rajagopuram</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">3,500-year old mango tree</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">1,000-pillar hall</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred tank with water lilies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Element:</span>
                    <span className="text-gray-600 dark:text-gray-300">Earth (Prithvi)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">23 acres</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Gopuram Height:</span>
                    <span className="text-gray-600 dark:text-gray-300">57 meters</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built by:</span>
                    <span className="text-gray-600 dark:text-gray-300">Pallavas, Cholas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Spiritual Significance</h3>
              <p className="text-amber-700 dark:text-amber-300">
                • One of Pancha Bootha Sthalams<br />
                • Associated with Parvati's penance<br />
                • Mango tree with four branches<br />
                • Saint Thirugnanasambandar's hymns
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Kanchipuram city:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: All city buses stop near the temple</li>
                <li>• By Auto: Available from railway station and bus stand</li>
                <li>• By Car: Easy access from Chennai (75 km)</li>
                <li>• Walking: 1 km from Kanchipuram bus stand</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Morning: 6:00 AM - 12:30 PM<br />
                    Evening: 4:00 PM - 8:30 PM<br />
                    Special poojas on festival days
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Festivals</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    • Panguni Uthiram (March-April)<br />
                    • Chitra Pournami<br />
                    • Navaratri<br />
                    • Shivaratri
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kanchipuram" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Kanchipuram
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 dark:bg-gray-800 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default EkambareswararTemplePage;
