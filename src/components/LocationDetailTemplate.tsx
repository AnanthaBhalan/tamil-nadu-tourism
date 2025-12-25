import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaPhone, FaGlobe, FaArrowLeft } from 'react-icons/fa';

type LocationDetailProps = {
  id: string;
  title: string;
  city: string;
  description: string;
  imageUrl: string;
  address: string;
  timing: string;
  entryFee: string;
  contact: string;
  website?: string;
  tips: string[];
  coordinates: [number, number];
  nearbyAttractions?: Array<{
    id: string;
    name: string;
    distance: string;
  }>;
};

const LocationDetailTemplate: React.FC<LocationDetailProps> = ({
  title,
  city,
  description,
  imageUrl,
  address,
  timing,
  entryFee,
  contact,
  website,
  tips,
  coordinates,
  nearbyAttractions = []
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Back Button */}
          <div className="p-4 border-b">
            <Link 
              to={`/${city.toLowerCase()}`} 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to {city}
            </Link>
          </div>
          
          {/* Hero Image */}
          <div className="h-80 bg-gray-200 relative">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
                <div className="flex items-center text-white/90">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{city}, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            {/* Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Address</h3>
                    <p className="text-sm text-gray-500">{address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Timing</h3>
                    <p className="text-sm text-gray-500">{timing}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <FaMoneyBillWave className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Entry Fee</h3>
                    <p className="text-sm text-gray-500">{entryFee}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {contact && (
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Contact</h3>
                      <a href={`tel:${contact.replace(/\D/g, '')}`} className="text-sm text-blue-600 hover:underline">
                        {contact}
                      </a>
                    </div>
                  </div>
                )}

                {website && (
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <FaGlobe className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Website</h3>
                      <a 
                        href={website.startsWith('http') ? website : `https://${website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline break-all"
                      >
                        {website}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">On Map</h3>
                    <Link 
                      to={`/map?location=${coordinates[0]},${coordinates[1]}`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View on Map
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            {tips && tips.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Travel Tips</h3>
                <ul className="space-y-2">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby Attractions */}
            {nearbyAttractions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Nearby Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nearbyAttractions.map((attraction) => (
                    <Link
                      key={attraction.id}
                      to={`/location/${attraction.id}`}
                      className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900">{attraction.name}</h4>
                      <p className="text-sm text-gray-500">{attraction.distance} from {title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailTemplate;
