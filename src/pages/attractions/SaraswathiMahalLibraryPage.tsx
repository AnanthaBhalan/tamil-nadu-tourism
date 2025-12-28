import * as React from 'react';
import { Link } from 'react-router-dom';

const SaraswathiMahalLibraryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Saraswathi Mahal Library.jpg" 
              alt="Saraswathi Mahal Library" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Saraswathi Mahal Library</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Saraswathi Mahal Library is one of the oldest libraries in Asia, established in the 16th century by the Nayak rulers 
                of Thanjavur. This magnificent institution houses over 60,000 rare manuscripts, making it a treasure trove of ancient knowledge 
                and cultural heritage.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The library was developed and expanded by the Maratha ruler Serfoji II (1798-1832), who was a great scholar and patron of arts. 
                His personal collection of books and manuscripts forms the core of this library, which continues to serve as an important center 
                for research and learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Collection Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Ancient palm leaf manuscripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Rare European books from 16th-19th century</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sanskrit and Tamil literary works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Historical maps and drawings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Visitor Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Entry Fee:</strong> ₹20 for Indians, ₹100 for foreigners</li>
                  <li>• <strong>Timings:</strong> 9:00 AM - 1:00 PM, 2:00 PM - 5:00 PM</li>
                  <li>• <strong>Closed:</strong> Fridays and government holidays</li>
                  <li>• <strong>Photography:</strong> Strictly prohibited</li>
                  <li>• <strong>Research:</strong> Prior permission required</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Notable Collections</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Palm Leaf Manuscripts</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Over 20,000 palm leaf manuscripts containing ancient texts on medicine, astronomy, mathematics, literature, and philosophy. 
                    Some manuscripts date back over 800 years.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Serfoji II Collection</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personal collection of King Serfoji II including rare books on various subjects, his own writings, and manuscripts 
                    collected during his travels across Europe.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Rare European Books</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Collection of early printed books from Europe, including works on science, medicine, and literature from the 16th-19th centuries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Historical Significance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The library represents the confluence of Indian and European knowledge systems during the 18th and 19th centuries. 
                King Serfoji II's vision of creating a center of learning that would preserve ancient knowledge while embracing 
                modern scientific developments makes this library unique.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The library has played a crucial role in preserving rare manuscripts that might otherwise have been lost to time. 
                Many scholars from around the world visit this library to study its rare collections and conduct research on various aspects 
                of South Indian culture and history.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Conservation Efforts</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The library employs modern conservation techniques to preserve its fragile collections. The palm leaf manuscripts are 
                stored in climate-controlled conditions to prevent deterioration. Digitalization projects are underway to preserve 
                the content of rare manuscripts for future generations.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The library also conducts research on traditional knowledge systems and has published several books based on its 
                rare collections, making ancient wisdom accessible to modern readers.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Pro Tip</h3>
              <p className="text-purple-700 dark:text-purple-300">
                Visit the library's exhibition hall to see some of the rare manuscripts on display. The library offers guided tours 
                that provide fascinating insights into the history of the collection and the conservation techniques used.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/thanjavur" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Thanjavur
              </Link>
              
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Thanjavur Palace Complex</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaraswathiMahalLibraryPage;
