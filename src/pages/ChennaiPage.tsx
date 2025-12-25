import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';

const ChennaiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-blue-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Chennai</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Chennai</h2>
              <p className="text-gray-600">
                Chennai, the capital of Tamil Nadu, is known for its beautiful Marina Beach, rich cultural heritage, 
                and vibrant arts scene. It's a major economic and cultural hub in South India, famous for its 
                temples, colonial architecture, and delicious South Indian cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Marina Beach</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Kapaleeshwarar Temple</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Fort St. George</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>San Thome Basilica</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32">Best Time to Visit:</span>
                    <span>November to February</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Local Cuisine:</span>
                    <span>Idli, Dosa, Filter Coffee</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Language:</span>
                    <span>Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Best For:</span>
                    <span>Beach Lovers, History Buffs, Foodies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Travel Tips</h3>
              <p className="text-blue-700">
                • Try the famous filter coffee at local cafes
                <br />
                • Visit early morning or late evening to avoid the heat
                <br />
                • Use local trains or cabs for convenient travel
                <br />
                • Don't miss the local shopping at T. Nagar
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Chennai</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[13.0827, 80.2707]} // Chennai coordinates
                  zoom={12}
                  markers={[
                    {
                      position: [13.0550, 80.2792],
                      title: 'Marina Beach',
                      description: 'Longest natural urban beach in India'
                    },
                    {
                      position: [13.0629, 80.2709],
                      title: 'Kapaleeshwarar Temple',
                      description: 'Dravidian-style Hindu temple'
                    },
                    {
                      position: [13.0799, 80.2896],
                      title: 'Fort St. George',
                      description: 'First English fortress in India'
                    },
                    {
                      position: [13.0339, 80.2694],
                      title: 'San Thome Basilica',
                      description: 'National shrine and minor basilica'
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
                href="https://www.tamilnadutourism.tn.gov.in/destinations/chennai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
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

export default ChennaiPage;
