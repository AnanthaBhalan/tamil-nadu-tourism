import * as React from 'react';
import { Link } from 'react-router-dom';

const DestinationsPage: React.FC = () => {
  const destinations = [
    {
      name: 'Chennai',
      description: 'The capital city known for Marina Beach, temples, and vibrant culture',
      image: '/images/destinations/chennai.jpg',
      color: 'blue',
      path: '/chennai',
      highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George']
    },
    {
      name: 'Madurai',
      description: 'Ancient city famous for Meenakshi Temple and rich cultural heritage',
      image: '/images/destinations/madurai.jpg',
      color: 'orange',
      path: '/madurai',
      highlights: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum']
    },
    {
      name: 'Ooty',
      description: 'Queen of Hill Stations with tea gardens and pleasant climate',
      image: '/images/destinations/ooty.jpg',
      color: 'green',
      path: '/ooty',
      highlights: ['Botanical Gardens', 'Nilgiri Mountain Railway', 'Doddabetta Peak']
    },
    {
      name: 'Coimbatore',
      description: 'Manchester of South India, gateway to the Nilgiri Hills',
      image: '/images/Marudhamalai Temple.jpg',
      color: 'green',
      path: '/coimbatore',
      highlights: ['Marudhamalai Temple', 'VOC Park', 'Siruvani Waterfalls']
    },
    {
      name: 'Kanchipuram',
      description: 'City of Thousand Temples and silk sarees',
      image: '/images/Kamakshi Amman Temple.jpg',
      color: 'amber',
      path: '/kanchipuram',
      highlights: ['Kamakshi Amman Temple', 'Ekambareswarar Temple', 'Varadharaja Perumal Temple']
    },
    {
      name: 'Rameshwaram',
      description: 'Sacred pilgrimage site with beautiful beaches and temples',
      image: '/images/Ramanathaswamy Temple.jpg',
      color: 'blue',
      path: '/rameshwaram',
      highlights: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi Beach']
    },
    {
      name: 'Kodaikanal',
      description: 'Princess of Hill Stations with misty mountains and lakes',
      image: '/images/Kodaikanal Lake.jpg',
      color: 'green',
      path: '/kodaikanal',
      highlights: ['Kodaikanal Lake', 'Coakers Walk', 'Pillar Rocks']
    },
    {
      name: 'Kanyakumari',
      description: 'Southern tip of India where three oceans meet',
      image: '/images/Vivekananda Rock Memorial.jpg',
      color: 'blue',
      path: '/kanyakumari',
      highlights: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Sunset Point']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; hover: string; text: string; accent: string } } = {
      blue: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-600',
        accent: 'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
      },
      orange: {
        bg: 'bg-orange-600',
        hover: 'hover:bg-orange-700',
        text: 'text-orange-600',
        accent: 'bg-orange-50 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
      },
      green: {
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-600',
        accent: 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      },
      amber: {
        bg: 'bg-amber-600',
        hover: 'hover:bg-amber-700',
        text: 'text-amber-600',
        accent: 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the diverse landscapes, ancient temples, vibrant culture, and breathtaking beauty 
            that make Tamil Nadu a traveler's paradise. From bustling cities to serene hill stations, 
            from sacred temples to pristine beaches - experience it all.
          </p>
        </div>

        {/* Featured Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.slice(0, 6).map((destination) => {
            const colors = getColorClasses(destination.color);
            return (
              <div key={destination.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={`${destination.name} - ${destination.description}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{destination.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {destination.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Top Attractions:</h4>
                    <ul className="space-y-1">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <span className={`${colors.text} mr-2`}>•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={destination.path}
                    className={`inline-block w-full text-center ${colors.bg} ${colors.hover} text-white font-semibold py-2 px-4 rounded-lg transition-colors`}
                  >
                    Explore {destination.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Destinations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">More Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.slice(6).map((destination) => {
              const colors = getColorClasses(destination.color);
              return (
                <div key={destination.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{destination.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-xs ${colors.accent}`}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={destination.path}
                    className={`${colors.text} hover:underline font-semibold`}
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Travel Tips Section */}
        <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Travel Tips for Tamil Nadu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Best Time to Visit</h3>
              <p className="text-blue-700 dark:text-blue-300">
                October to March offers pleasant weather across most regions. Hill stations are best in summer (April-June).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Getting Around</h3>
              <p className="text-blue-700 dark:text-blue-300">
                Well-connected by road, rail, and air. Local transport includes buses, autos, and app-based cabs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">What to Pack</h3>
              <p className="text-blue-700 dark:text-blue-300">
                Light cotton clothes for plains, warm clothing for hill stations. Comfortable walking shoes for temple visits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Cultural Etiquette</h3>
              <p className="text-blue-700 dark:text-blue-300">
                Dress modestly when visiting temples. Remove shoes before entering sacred places. Respect local customs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Explore?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Start planning your Tamil Nadu adventure today. Our team is here to help you create the perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/about"
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
