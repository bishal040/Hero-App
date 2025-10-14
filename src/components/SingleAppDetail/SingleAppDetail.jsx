// src/components/SingleAppDetail/SingleAppDetail.jsx

import React, { useState, useEffect } from 'react'; // 1. Import useState and useEffect
import { useLoaderData } from 'react-router-dom';
// 2. Import both save and get functions from localStorage utility
import { saveInstalledApp, getInstalledApps } from '../../utils/localStorage';

// Helper function to format large numbers
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
};

const SingleAppDetail = () => {
  const app = useLoaderData();
  // 3. Add state to track if the app is installed
  const [isInstalled, setIsInstalled] = useState(false);

  // 4. Check localStorage when the component loads
  useEffect(() => {
    const installedApps = getInstalledApps();
    // Check if an app with the current ID already exists in the list
    const alreadyInstalled = installedApps.find(installedApp => installedApp.id === app.id);
    if (alreadyInstalled) {
      setIsInstalled(true); // If so, set the state to true
    }
  }, [app.id]); // This effect runs whenever the app ID changes

  const handleInstall = () => {
    const success = saveInstalledApp(app);
    if (success) {
      setIsInstalled(true); // 5. Update state immediately after installing
      alert(`Successfully installed ${app.title}!`);
    } else {
      // This part might not be needed if the button is already disabled, but it's good for safety
      alert(`${app.title} is already installed.`);
    }
  };

  if (!app) {
    return <div className="text-center p-10">Loading app details...</div>;
  }

  const reversedRatings = Array.isArray(app.ratings) ? [...app.ratings].reverse() : [];
  const totalReviews = app.reviews || 0;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      {/* ... (Header and other sections remain the same) ... */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img src={app.image} alt={app.title} className="w-32 h-32 rounded-3xl shadow-lg" />
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-4xl font-bold">{app.title}</h1>
          <p className="text-lg text-blue-500">{app.companyName}</p>
          <div className="flex justify-center md:justify-start gap-8 mt-4 text-center">
            <div>
              <p className="text-xl font-bold">{formatNumber(app.downloads)}</p>
              <p className="text-sm text-gray-500">Downloads</p>
            </div>
            <div>
              <p className="text-xl font-bold">{app.ratingAvg} ★</p>
              <p className="text-sm text-gray-500">Average Ratings</p>
            </div>
            <div>
              <p className="text-xl font-bold">{formatNumber(totalReviews)}</p>
              <p className="text-sm text-gray-500">Total Reviews</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          {/* 6. Update the button to be disabled and change text based on the isInstalled state */}
          <button 
            onClick={handleInstall} 
            className="btn btn-primary btn-block text-lg"
            disabled={isInstalled}
          >
            {isInstalled ? 'Installed' : `Install (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* ... (Ratings and Description sections remain the same) ... */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <div className="space-y-2">
          {reversedRatings.map((rating) => {
            const percentage = totalReviews > 0 ? (rating.count / totalReviews) * 100 : 0;
            return (
              <div key={rating.name} className="flex items-center gap-4">
                <span className="text-sm font-medium w-16 text-right">{rating.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-orange-400 h-2.5 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default SingleAppDetail;