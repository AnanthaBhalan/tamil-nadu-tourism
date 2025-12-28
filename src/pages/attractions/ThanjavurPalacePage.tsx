import * as React from 'react';
import { Link } from 'react-router-dom';

const ThanjavurPalacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          <div className="h-64 relative overflow-hidden">
            <img 
              src="/images/Thanjavur Palace.jpg" 
              alt="Thanjavur Palace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Thanjavur Palace</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Thanjavur Palace, also known as Aranmanai, is a magnificent structure built by the Nayak rulers in the 16th century. 
                This architectural marvel showcases a blend of Dravidian and Rajput styles, making it a unique historical monument in South India.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The palace complex served as the official residence of the Bhonsle family, who were the Maratha rulers of Thanjavur. 
                Today, it houses several museums that display artifacts from the Chola and Nayak periods, offering visitors a glimpse into the rich cultural heritage of the region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Palace Sections</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Saraswathi Mahal Library - Ancient manuscripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Art Gallery - Chola bronze statues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Durbar Hall - Royal court room</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Bell Tower - 8-story watchtower</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Visitor Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Entry Fee:</strong> ₹50 for Indians, ₹200 for foreigners</li>
                  <li>• <strong>Timings:</strong> 9:00 AM - 5:00 PM</li>
                  <li>• <strong>Closed:</strong> Fridays</li>
                  <li>• <strong>Photography:</strong> Allowed with fee</li>
                  <li>• <strong>Duration:</strong> 2-3 hours recommended</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The palace complex spans over 10 acres and features impressive architectural elements. The 8-story bell tower, 
                known as the Goodagopuram, offers panoramic views of the city. The palace walls are adorned with beautiful murals 
                depicting scenes from Hindu mythology and royal life.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The palace's unique feature is its underground tunnel that supposedly connects to the Brihadeeswarar Temple. 
                The architecture reflects the grandeur of the Nayak and Maratha periods with intricately carved pillars, 
                ornate ceilings, and spacious courtyards.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Museums Inside</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Saraswathi Mahal Library</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    One of the oldest libraries in Asia, housing over 60,000 rare manuscripts in Sanskrit, Tamil, and other languages.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Art Gallery</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Features an impressive collection of Chola bronze statues, stone sculptures, and ancient artifacts dating back to the 9th century.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Pro Tip</h3>
              <p className="text-purple-700 dark:text-purple-300">
                Don't miss the evening light show that narrates the history of the palace. The bell tower climb offers the best 
                panoramic views of Thanjavur, especially during sunset.
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
                <p className="text-lg font-semibold text-gray-800 dark:text-white">East Street, Thanjavur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanjavurPalacePage;
