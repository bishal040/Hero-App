import React, { useState, useEffect } from 'react';
import { getInstalledApps, removeInstalledApp } from '../../utils/localStorage';

// Helper function to format large numbers
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  return num;
};

const InstalledApps = () => {
  const [apps, setApps] = useState([]);

  // Load apps from localStorage when the component mounts
  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleUninstall = (appId) => {
    // Remove from localStorage
    removeInstalledApp(appId);
    // Update the state to re-render the component with the updated list
    setApps(getInstalledApps());
    alert('App uninstalled successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-600 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold">{apps.length} Apps Found</p>
          <select className="select select-bordered select-sm">
            <option>Sort By Size</option>
            <option>Sort By Name</option>
          </select>
        </div>

        <div className="space-y-4">
          {apps.length > 0 ? (
            apps.map((app) => (
              <div key={app.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-16 h-16 bg-gray-200 rounded-md object-cover" 
                  />
                  <div>
                    <h2 className="font-bold text-lg">{app.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span>↓ {formatNumber(app.downloads)}</span>
                      <span>⭐ {app.ratingAvg}</span>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => handleUninstall(app.id)}
                  className="btn btn-outline btn-success"
                >
                  Uninstall
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">You have no apps installed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;