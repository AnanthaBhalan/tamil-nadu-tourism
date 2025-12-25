import React from 'react';
import { Link } from 'react-router-dom';

const TravelTipsPage = () => {
  const tips = [
    {
      id: 1,
      title: 'Best Time to Visit',
      description: 'The best time to visit Tamil Nadu is from October to March when the weather is pleasant.',
      icon: '⏱️',
      link: '/travel-tips/best-time'
    },
    {
      id: 2,
      title: 'Local Transportation',
      description: 'Use local buses, trains, and auto-rickshaws for affordable travel within cities.',
      icon: '🚌',
      link: '/travel-tips/transportation'
    },
    {
      id: 3,
      title: 'Cultural Etiquette',
      description: 'Dress modestly when visiting temples and remove footwear before entering.',
      icon: '🙏',
      link: '/travel-tips/etiquette'
    },
    {
      id: 4,
      title: 'Local Cuisine',
      description: 'Try local delicacies like dosa, idli, sambar, and filter coffee.',
      icon: '🍛',
      link: '/travel-tips/cuisine'
    },
    {
      id: 5,
      title: 'Safety Tips',
      description: 'Keep your belongings secure and be cautious in crowded areas.',
      icon: '🛡️',
      link: '/travel-tips/safety'
    },
    {
      id: 6,
      title: 'Seasonal Guide',
      description: 'Check out our seasonal recommendations for the best experiences.',
      icon: '📅',
      link: '/seasonal-tips'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Travel Tips
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Essential information to make your trip to Tamil Nadu smooth and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <Link
              key={tip.id}
              to={tip.link}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-3xl mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1">
                  {tip.description}
                </p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need more help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our travel experts are here to help you plan your perfect trip to Tamil Nadu.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelTipsPage;
