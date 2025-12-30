import { useState } from 'react';
import axios from 'axios';

type Stop = {
  placeId: string;
  placeName: string;
  order: number;
  visitDuration: number;
  cost: number;
};

type Day = {
  dayNumber: number;
  totalCost: number;
  totalTime: number;
  stops: Stop[];
};

type Itinerary = {
  city: string;
  tripLength: number;
  days: Day[];
  totalCost: number;
};

export default function TripPlanner() {
  const [city, setCity] = useState('Thanjavur');
  const [tripLength, setTripLength] = useState(2);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(false);

  const cities = ['Thanjavur', 'Kanchipuram', 'Madurai', 'Chennai', 'Ooty', 'Coimbatore'];

  const checkBackendHealth = async () => {
    try {
      const res = await axios.get('http://localhost:5000/health');
      console.log('Backend health check:', res.data);
      alert('Backend server is running correctly!');
    } catch (e) {
      console.error('Health check failed:', e);
      alert('Backend server is not responding. Please start the server with "npm run server"');
    }
  };

  const handlePlan = async () => {
    setLoading(true);
    try {
      console.log('Sending request to backend...', { city, tripLength });
      const res = await axios.post('http://localhost:5000/api/trips/plan', {
        city,
        tripLength
      }, {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response received:', res.data);
      setItinerary(res.data.itinerary);
    } catch (e: any) {
      console.error('Error:', e);
      if (e.code === 'ERR_NETWORK') {
        alert('Network Error: Unable to connect to backend server. Please ensure server is running on port 5000.');
      } else if (e.code === 'ECONNREFUSED') {
        alert('Connection Error: Backend server is not running. Please start the server with "npm run server".');
      } else {
        alert(`Failed to generate itinerary: ${e.message || 'Unknown error'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Trip Planner
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Plan your perfect journey through Tamil Nadu's most captivating destinations
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-colors duration-200 mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Plan Your Trip</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* City Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Select City
                </label>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                >
                  {cities.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Trip Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Trip Duration: <span className="text-blue-600">{tripLength}</span> days
                </label>
                <input
                  type="range"
                  min={1}
                  max={7}
                  value={tripLength}
                  onChange={e => setTripLength(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>1 day</span>
                  <span>7 days</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePlan}
              disabled={loading}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Planning...
                </span>
              ) : (
                'Generate Itinerary'
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {itinerary && (
          <div className="space-y-8">
            {/* Summary Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-colors duration-200">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      {itinerary.city} Adventure
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {itinerary.tripLength}-Day Itinerary
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{itinerary.totalCost.toFixed(0)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Cost</div>
                  </div>
                </div>
              </div>
            </div>

            {itinerary.days.map(day => (
              <div
                key={day.dayNumber}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-200 hover:shadow-2xl"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Day {day.dayNumber}</h3>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Duration</div>
                      <div className="font-semibold">{day.totalTime.toFixed(1)} hours</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                      {day.stops.length} Places to Visit
                    </span>
                    <span className="ml-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                      ₹{day.totalCost.toFixed(0)} Entry Fees
                    </span>
                  </div>
                <div className="space-y-3">
                  {day.stops.map(stop => (
                    <div
                      key={stop.placeId + stop.order}
                      className="border-l-4 border-blue-500 bg-slate-50 px-4 py-3 rounded"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold">
                            {stop.order}. {stop.placeName}
                          </p>
                          <p className="text-xs text-slate-600 mt-1">
                            ⏱️ Visit: {stop.visitDuration} hrs
                          </p>
                        </div>
                        <p className="text-sm font-semibold ml-4">
                          ₹{stop.cost.toFixed(0)}
                        </p>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
