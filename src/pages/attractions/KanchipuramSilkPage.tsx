import * as React from 'react';
import { Link } from 'react-router-dom';

const KanchipuramSilkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Kanchipuram Silk Sarees</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About Kanchipuram Silk</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Kanchipuram silk sarees are renowned worldwide for their exquisite craftsmanship, 
                vibrant colors, and intricate designs. Woven with pure mulberry silk and gold/zari threads, 
                these traditional sarees have been crafted for centuries in the temple city of Kanchipuram. 
                Each saree is a masterpiece of handloom weaving, taking weeks to complete and representing 
                the pinnacle of South Indian textile artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Craft Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Pure Mulberry Silk</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Gold & Silver Zari Work</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Traditional Motifs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Handloom Weaving</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">GI Tag:</span>
                    <span className="text-gray-600 dark:text-gray-300">Geographical Indication (2005)</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Weavers:</span>
                    <span className="text-gray-600 dark:text-gray-300">50,000+ families</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Time per Saree:</span>
                    <span className="text-gray-600 dark:text-gray-300">2-3 weeks average</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32 text-gray-700 dark:text-gray-300">Export:</span>
                    <span className="text-gray-600 dark:text-gray-300">Global recognition</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Design Elements</h3>
              <p className="text-purple-700 dark:text-purple-300">
                • Temple borders and motifs<br />
                • Peacock, elephant, and floral designs<br />
                • Traditional checks and stripes<br />
                • Mythological scenes and patterns
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Shopping Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore the silk weaving heritage of Kanchipuram:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• • Government Silk Emporium (authentic quality)</li>
                <li>• • Traditional weaver cooperatives</li>
                <li>• • Heritage silk showrooms</li>
                <li>• • Direct weaver workshops</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Visitor Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Best Time to Shop</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    • Festival seasons (April-May, Oct-Nov)<br />
                    • Wedding season discounts<br />
                    • Weekday visits for better service
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Authentication</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    • Look for GI tag hologram<br />
                    • Check silk purity certificate<br />
                    • Verify zari quality
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kanchipuram" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                ← Back to Kanchipuram
              </Link>
              <Link 
                to="/destinations" 
                className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:bg-gray-800 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
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

export default KanchipuramSilkPage;
