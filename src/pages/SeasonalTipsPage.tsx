import React from 'react';

const SeasonalTipsPage = () => {
  const seasons = [
    {
      id: 1,
      name: 'Winter (Dec - Feb)',
      description: 'Mild and pleasant weather, perfect for sightseeing and beach visits.',
      activities: [
        'Visit hill stations like Ooty and Kodaikanal',
        'Enjoy the Pongal festival in January',
        'Explore wildlife sanctuaries',
        'Attend the Mamallapuram Dance Festival'
      ],
      temperature: '15°C - 29°C',
      icon: '❄️'
    },
    {
      id: 2,
      name: 'Summer (Mar - May)',
      description: 'Hot and humid weather, ideal for hill station getaways.',
      activities: [
        'Visit hill stations to escape the heat',
        'Explore temples in the early morning or evening',
        'Enjoy water-based activities',
        'Taste summer fruits like mangoes and watermelons'
      ],
      temperature: '24°C - 38°C',
      icon: '☀️'
    },
    {
      id: 3,
      name: 'Monsoon (Jun - Sep)',
      description: 'Heavy rainfall, especially in coastal areas, with lush green landscapes.',
      activities: [
        'Witness the lush green countryside',
        'Visit waterfalls at their peak',
        'Experience local festivals',
        'Enjoy the pleasant weather in hill stations'
      ],
      temperature: '23°C - 33°C',
      icon: '🌧️'
    },
    {
      id: 4,
      name: 'Post-Monsoon (Oct - Nov)',
      description: 'Pleasant weather with occasional showers, great for temple visits and cultural tours.',
      activities: [
        'Explore cultural heritage sites',
        'Attend Diwali celebrations',
        'Go on nature trails',
        'Visit wildlife sanctuaries'
      ],
      temperature: '22°C - 32°C',
      icon: '🌤️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Seasonal Travel Guide
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Plan your visit to Tamil Nadu based on the season
          </p>
        </div>

        <div className="space-y-8">
          {seasons.map((season) => (
            <div 
              key={season.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <span className="text-2xl">{season.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {season.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {season.description} (Avg. temp: {season.temperature})
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recommended Activities:
                  </h4>
                  <ul className="space-y-2">
                    {season.activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Planning your trip?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Check our travel tips for more information to make your journey comfortable and memorable.
          </p>
          <a
            href="/travel-tips"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Travel Tips
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeasonalTipsPage;
