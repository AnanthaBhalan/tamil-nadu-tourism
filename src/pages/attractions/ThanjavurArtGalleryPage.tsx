import * as React from 'react';
import { Link } from 'react-router-dom';

const ThanjavurArtGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Art Gallery.jpg" 
              alt="Thanjavur Art Gallery" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Thanjavur Art Gallery</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Thanjavur Art Gallery, located within the Thanjavur Palace complex, is a treasure trove of South Indian art and culture. 
                Established in 1951, this gallery houses one of the finest collections of Chola bronze statues, stone sculptures, and artifacts 
                that showcase the artistic excellence of ancient Tamil Nadu.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The gallery provides visitors with a unique opportunity to witness the evolution of South Indian art from the 9th to the 12th century CE. 
                The collection includes masterpieces that reflect the religious, cultural, and artistic traditions of the Chola dynasty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Collection Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Chola bronze statues of Nataraja and other deities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Stone sculptures from various temples</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Tanjore paintings and artifacts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Ancient coins and inscriptions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Visitor Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Entry Fee:</strong> ₹30 for Indians, ₹150 for foreigners</li>
                  <li>• <strong>Timings:</strong> 9:00 AM - 5:00 PM</li>
                  <li>• <strong>Closed:</strong> Fridays and government holidays</li>
                  <li>• <strong>Photography:</strong> Not allowed inside</li>
                  <li>• <strong>Duration:</strong> 1-2 hours recommended</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Notable Exhibits</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Nataraja Statue</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    A magnificent bronze statue of Lord Shiva as Nataraja, depicting the cosmic dance. This 12th-century masterpiece 
                    showcases the intricate craftsmanship of Chola artisans.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Goddess Parvati</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Beautiful bronze sculpture of Goddess Parvati, standing at over 3 feet tall, exemplifying the grace and beauty 
                    of Chola bronze casting techniques.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Stone Sculptures</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Collection of stone carvings depicting various Hindu deities, mythological scenes, and temple architecture 
                    from the Chola period.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Artistic Significance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The gallery's collection represents the pinnacle of Chola artistic achievements. The bronze statues are particularly 
                significant as they demonstrate the lost-wax casting technique (cire-perdue) that was perfected during the Chola period.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                These artworks not only serve as religious icons but also as historical documents that provide insights into the 
                cultural, social, and religious life of ancient Tamil Nadu. The gallery plays a crucial role in preserving and 
                showcasing this rich artistic heritage for future generations.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Pro Tip</h3>
              <p className="text-purple-700 dark:text-purple-300">
                Hire a guide to understand the historical and cultural significance of each artifact. The gallery offers 
                detailed information boards, but a guide can provide deeper insights into the artistic techniques and historical context.
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

export default ThanjavurArtGalleryPage;
