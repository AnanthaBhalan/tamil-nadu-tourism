import * as React from 'react';
import { Link } from 'react-router-dom';

const KamakshiAmmanTemplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Kamakshi Amman Temple.jpg" 
              alt="Kamakshi Amman Temple" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Kamakshi Amman Temple</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Kamakshi Amman Temple</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The Kamakshi Amman Temple is a revered Hindu temple dedicated to Goddess Kamakshi, 
                a form of Goddess Parvati. This ancient temple, built in the Dravidian architectural style, 
                is one of the most important pilgrimage sites in South India. The temple is renowned for 
                its spiritual significance, intricate carvings, and the powerful presence of the deity 
                who is believed to fulfill the wishes of her devotees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Temple Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Golden Gopuram (Tower)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sri Chakra Sanctum</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Intricate Stone Sculptures</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sacred Temple Tank</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Built:</span>
                    <span className="text-gray-600 dark:text-gray-300">Pallava period (6th century)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Deity:</span>
                    <span className="text-gray-600 dark:text-gray-300">Goddess Kamakshi (Parvati)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Architecture:</span>
                    <span className="text-gray-600 dark:text-gray-300">Dravidian style</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Significance:</span>
                    <span className="text-gray-600 dark:text-gray-300">One of 51 Shakti Peethas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Spiritual Importance</h3>
              <p className="text-amber-700 dark:text-amber-300">
                • Part of the famous Shakti Peethas pilgrimage<br />
                • Goddess worshipped in sitting posture (Padmasana)<br />
                • Associated with Adi Shankaracharya's visit<br />
                • Powerful meditation and spiritual center
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Getting There</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Located in the heart of Kanchipuram city:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• By Bus: Kanchipuram bus stand (1 km)</li>
                <li>• By Train: Kanchipuram railway station (2 km)</li>
                <li>• By Car: Well-connected from Chennai (75 km)</li>
                <li>• By Auto: Easily available within the city</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Temple Festivals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Major Festivals</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">
                    • Navratri (9 nights)<br />
                    • Brahmotsavam (March/April)<br />
                    • Aadi Pooram (July/August)
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Special Poojas</h4>
                  <p className="text-pink-700 dark:text-pink-300 text-sm">
                    • Daily Abhishekam<br />
                    • Friday special poojas<br />
                    • Full moon day rituals
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

export default KamakshiAmmanTemplePage;
