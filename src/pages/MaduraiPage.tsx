import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';

const MaduraiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-purple-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Madurai</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Madurai</h2>
              <p className="text-gray-600">
                Known as the "Athens of the East," Madurai is one of the oldest continuously inhabited cities in the world. 
                It's famous for its magnificent Meenakshi Amman Temple, rich cultural heritage, and traditional Tamil architecture. 
                The city is a major pilgrimage and cultural center in Tamil Nadu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Meenakshi Amman Temple</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Thirumalai Nayakkar Palace</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Gandhi Memorial Museum</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Koodal Azhagar Temple</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32">Best Time to Visit:</span>
                    <span>October to March</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Local Cuisine:</span>
                    <span>Jigarthanda, Paruthi Paal</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Language:</span>
                    <span>Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Best For:</span>
                    <span>Temple Tourism, History, Culture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Travel Tips</h3>
              <p className="text-orange-700">
                • Visit Meenakshi Temple early morning to avoid crowds
                <br />
                • Try the famous Madurai Jigarthanda drink
                <br />
                • Respect temple dress codes and photography rules
                <br />
                • Explore the local markets for traditional handicrafts
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Madurai</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[9.9252, 78.1198]} // Madurai coordinates
                  zoom={13}
                  markers={[
                    {
                      position: [9.9196, 78.1193],
                      title: 'Meenakshi Amman Temple',
                      description: 'Iconic Hindu temple with towering gopurams'
                    },
                    {
                      position: [9.9197, 78.1212],
                      title: 'Thirumalai Nayakkar Palace',
                      description: '17th-century palace with grand architecture'
                    },
                    {
                      position: [9.9390, 78.1219],
                      title: 'Gandhi Memorial Museum',
                      description: 'Museum dedicated to Mahatma Gandhi'
                    },
                    {
                      position: [9.9358, 78.1354],
                      title: 'Koodal Azhagar Temple',
                      description: 'Ancient Vishnu temple with intricate carvings'
                    }
                  ]}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link 
                to="/" 
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                ← Back to Home
              </Link>
              <a 
                href="https://www.tamilnadutourism.tn.gov.in/destinations/madurai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
                Official Tourism Site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaduraiPage;
