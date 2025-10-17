import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { saveInstalledApp, getInstalledApps } from '../../utils/localStorage';
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
};
const SingleAppDetail = () => {
  const app = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApps();
    const alreadyInstalled = installedApps.find(installedApp => installedApp.id === app.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    const success = saveInstalledApp(app);
    if (success) {
      setIsInstalled(true);
      alert(`Successfully installed ${app.title}!`);
    } else {
      alert(`${app.title} is already installed.`);
    }
  };
  if (!app) {
    return <div className="text-center p-10">Loading app details...</div>;
  }
  const reversedRatings = Array.isArray(app.ratings) ? [...app.ratings].reverse() : [];
  const totalReviews = app.reviews || 0;
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl text-black">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img src={app.image} alt={app.title} className="w-32 h-32 rounded-3xl shadow-lg" />
        
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-4xl font-bold">{app.title}</h1>
          <p className="text-lg text-blue-500"><span className='text-zinc-500'>Developed by </span>{app.companyName}</p>

          <div className="flex justify-center md:justify-start gap-8 mt-4 text-center">
            <div>
              <img src="../../src/assets/img/icon-downloads.png" alt="" className='w-6 h-6'/>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-xl font-bold text-left">{formatNumber(app.downloads)}</p>
            </div>
            <div>
              <img src="../../src/assets/img/icon-ratings.png" alt="" className='w-6 h-6'/>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="text-xl font-bold text-left">{app.ratingAvg} ★</p>
            </div>
            <div>
              <img src="../../src/assets/img/icon-review.png" alt="" className='w-6 h-6'/>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-xl font-bold text-left">{formatNumber(totalReviews)}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`w-full px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-200 
              ${isInstalled 
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
          >
            {isInstalled ? 'Installed' : `Install (${app.size} MB)`}
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <div className="space-y-5">
          {reversedRatings.map((rating) => {
            const percentage = totalReviews > 0 ? (rating.count / totalReviews) * 100 : 0;
            return (
              <div key={rating.name} className="flex items-center gap-4">
                <span className="text-sm font-medium w-16 text-right">{rating.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-5.5">
                  <div
                    className="bg-orange-400 h-5.5 rounded-full"
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
        <p className="text-zinc-500 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default SingleAppDetail;