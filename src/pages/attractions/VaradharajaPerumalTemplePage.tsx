import * as React from 'react';
import { Link } from 'react-router-dom';

const VaradharajaPerumalTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Varadharaja Perumal Temple.jpg" 
              alt="Varadharaja Perumal Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Varadharaja Perumal Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Varadharaja Perumal Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Varadharaja Perumal Temple is one of the most revered Vaishnavite temples in Kanchipuram, 
                dedicated to Lord Vishnu in his Varadharaja Perumal form. This ancient temple is one of 
                the 108 Divya Desams and is famous for its exquisite architecture and spiritual significance. 
                Built by the Cholas and later expanded by the Vijayanagara kings, the temple showcases 
                brilliant Dravidian architecture with intricate carvings and a massive temple complex spread 
                over 20 acres.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">100-pillar mandapam with sculptures</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Golden lizard sculptures</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred tank with golden lotus</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Stone chain carved from single rock</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Divya Desam:</span>
                    <span className="text-gray-600 dark:text-gray-300">One of 108 sacred temples</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Area:</span>
                    <span className="text-gray-600 dark:text-gray-300">20 acres</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built by:</span>
                    <span className="text-gray-600 dark:text-gray-300">Cholas, Vijayanagara</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Main Deity:</span>
                    <span className="text-gray-600 dark:text-gray-300">Lord Varadharaja Perumal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Spiritual Significance</h3>
              <p className="text-amber-700 dark:text-amber-300">
                • Visited by Alvars and Acharyas<br />
                • Ramanuja's spiritual center<br />
                • Atthi Varadar once in 40 years<br />
                • Sacred lizard legend
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the sacred Vishnu Kanchi area:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Routes to Vishnu Kanchi area</li>
                <li>• By Auto: Available from Kanchipuram railway station</li>
                <li>• By Car: 75 km from Chennai via NH4</li>
                <li>• Walking: 2 km from Kanchipuram bus stand</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Timings</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Morning: 6:30 AM - 12:00 PM<br />
                    Evening: 4:30 PM - 9:00 PM<br />
                    Special darshan on weekends
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Special Features</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    • Stone chain with 100 links<br />
                    • Golden lizard sculptures<br />
                    • 100-pillar hall with carvings<br />
                    • Sacred tank with healing properties
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

export default VaradharajaPerumalTemplePage;
