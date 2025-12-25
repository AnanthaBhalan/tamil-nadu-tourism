import * as React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';

const OotyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-green-600 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Ooty</h1>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Ooty</h2>
              <p className="text-gray-600">
                Nestled in the Nilgiri Hills, Ooty (Udhagamandalam) is a charming hill station known for its 
                tea plantations, colonial architecture, and pleasant climate. Often called the "Queen of Hill Stations," 
                it's a perfect getaway with its scenic beauty, botanical gardens, and cool mountain air.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Popular Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Ooty Botanical Gardens</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Nilgiri Mountain Railway</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Doddabetta Peak</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Ooty Lake & Boat House</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-32">Best Time to Visit:</span>
                    <span>April to June, September to November</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Local Delicacies:</span>
                    <span>Ooty Tea, Chocolates, Homemade Chocolates</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Language:</span>
                    <span>Tamil, English</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Best For:</span>
                    <span>Nature Lovers, Honeymoon, Family Trips</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Travel Tips</h3>
              <p className="text-green-700">
                • Carry warm clothing as temperatures can drop in the evening
                <br />
                • Book the Nilgiri Mountain Railway toy train in advance
                <br />
                • Visit tea estates for fresh tea tasting
                <br />
                • Try local homemade chocolates and cheese
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Ooty</h3>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapComponent 
                  center={[11.4102, 76.6950]} // Ooty coordinates
                  zoom={13}
                  markers={[
                    {
                      position: [11.4229, 76.7129],
                      title: 'Ooty Botanical Gardens',
                      description: 'Beautiful gardens with diverse plant species'
                    },
                    {
                      position: [11.4099, 76.6962],
                      title: 'Ooty Lake',
                      description: 'Scenic lake with boating facilities'
                    },
                    {
                      position: [11.4056, 76.5952],
                      title: 'Doddabetta Peak',
                      description: 'Highest peak in the Nilgiri Mountains'
                    },
                    {
                      position: [11.3763, 76.8019],
                      title: 'Pykara Lake',
                      description: 'Serene lake with boating and scenic views'
                    },
                    {
                      position: [11.4194, 76.7186],
                      title: 'Ooty Rose Garden',
                      description: 'Largest rose garden in India with thousands of varieties'
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
                href="https://www.tamilnadutourism.tn.gov.in/destinations/udhagamandalam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
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

export default OotyPage;
