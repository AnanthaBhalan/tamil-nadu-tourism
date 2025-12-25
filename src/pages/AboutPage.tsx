import * as React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">About Tamil Nadu Tourism</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Welcome to Tamil Nadu</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Tamil Nadu, the land of temples, traditions, and timeless heritage, invites you to explore its rich cultural tapestry. 
                From the ancient Dravidian architecture to the pristine beaches of the Bay of Bengal, from the misty hills of the Western Ghats 
                to the vibrant cities bustling with life, Tamil Nadu offers a unique blend of spirituality, nature, and modernity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We are dedicated to promoting sustainable tourism that preserves our cultural heritage while providing 
                  authentic experiences for travelers. Our mission is to showcase the beauty, diversity, and warmth of Tamil Nadu 
                  to the world while ensuring that tourism benefits local communities and protects our natural environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Preserve and promote cultural heritage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Support local communities and economies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Ensure sustainable and responsible tourism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Provide authentic travel experiences</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why Visit Tamil Nadu?</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Rich Cultural Heritage</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Home to UNESCO World Heritage sites, ancient temples, and living traditions that date back thousands of years.
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Natural Beauty</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      From pristine beaches to lush hill stations, waterfalls to wildlife sanctuaries.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Culinary Delights</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Experience the authentic flavors of South Indian cuisine, from filter coffee to traditional feasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">38+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Tourist Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Temples</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">900km</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Coastline</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Annual Visitors</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Team</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our dedicated team of tourism professionals, local guides, and hospitality experts work tirelessly 
                to ensure that every visitor to Tamil Nadu has a memorable and enriching experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Tourism Department</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Government officials and policy makers</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Local Guides</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Knowledgeable local experts</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Hospitality Partners</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hotels, restaurants, and transport services</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/destinations" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Explore Destinations →
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/" 
                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
