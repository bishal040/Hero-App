import React, { useState, useEffect } from 'react';

// Helper function to format large numbers for display (e.g., 50000000 -> 50.0M)
const formatNumber = (num) => {
  if (num == null || isNaN(num)) return '-';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

// --- Icon Components (for consistency and eliminating external images) ---
const DownloadIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const RatingIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ReviewIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.42 8.42 0 0 1 8.1 8.2z"></path>
    </svg>
);

// --- Rating Bar Component (for the breakdown chart) ---
const RatingBar = ({ name, count, totalReviews, color }) => {
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return (
        <div className="flex items-center space-x-3">
            <span className="w-8 text-sm font-medium text-gray-700 text-right">{name}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                <div 
                    className={`${color} h-2.5 rounded-full transition-all duration-500`} 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <span className="w-16 text-right text-sm text-gray-500">{formatNumber(count)}</span>
        </div>
    );
};

/**
 * Component to display the details of a single app.
 */
const SingleAppDetail = ({ appId }) => {
  // Fallback to a valid ID (like 101, matching the Nova Launcher example) if appId is missing
  const targetAppId = Number(appId) || 101; 

  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppDetails = async () => {
      if (!targetAppId) {
        setLoading(false);
        setError("No App ID provided for detail view.");
        return;
      }
      
      try {
        setLoading(true);
        const response = await fetch('/AppList.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        
        // Find the specific app based on the targetAppId, handling type coercion
        const foundApp = data.find(a => a.id != null && Number(a.id) === targetAppId); 

        if (foundApp) {
          setApp(foundApp);
        } else {
          setError(`App with ID ${targetAppId} not found.`);
        }
      } catch (e) {
        setError(`Failed to load app data: ${e.message}`);
        console.error("Error fetching app details:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAppDetails();
  }, [targetAppId]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-xl text-gray-500">Loading app details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 text-red-500 bg-red-50 rounded-xl mx-auto max-w-4xl mt-10 shadow-lg">
        <p className="font-semibold text-lg">Error Loading Data</p>
        <p>{error}</p>
        <p className="mt-4 text-sm text-gray-600">
          Ensure App ID {targetAppId} exists in your valid JSON array in 'AppList.json'.
        </p>
      </div>
    );
  }
  
  // Destructure with fallbacks based on your image
  const { 
    image, 
    title = 'Untitled App', 
    downloads = 0, 
    ratingAvg = 0, 
    description = 'No description provided.', 
    companyName = 'Unknown Developer', 
    reviews = 0, 
    ratings = [] 
  } = app; 

  const totalReviews = reviews;

  return (
    <div className="container mx-auto p-4 lg:p-10 font-inter">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 border-b bg-gray-50">
            <div className="flex items-center space-x-6">
                <img 
                    src={image} 
                    alt={`${title} icon`} 
                    className="w-24 h-24 object-contain rounded-2xl shadow-lg flex-shrink-0 border border-gray-200" 
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/2563eb/ffffff?text=APP'; }}
                />
                <div className="flex-grow">
                    <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
                    <p className="text-lg text-gray-600 font-medium mt-1">Developed by <span className="text-blue-600">{companyName}</span></p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="flex justify-between items-center mt-6 py-3 border-t border-b">
                <div className="text-center w-1/3">
                    <p className="text-2xl font-bold text-gray-800">{formatNumber(downloads)}</p>
                    <p className="text-sm text-gray-500 mt-1">Downloads</p>
                </div>
                <div className="text-center w-1/3 border-x border-gray-200">
                    <p className="text-2xl font-bold text-gray-800">{ratingAvg?.toFixed(1) || '-'}</p>
                    <p className="text-sm text-gray-500 mt-1">Average Ratings</p>
                </div>
                <div className="text-center w-1/3">
                    <p className="text-2xl font-bold text-gray-800">{formatNumber(totalReviews)}</p>
                    <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
                </div>
            </div>
            
             <div className="text-center mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] w-full max-w-xs">
                    Install Now ({app.size?.toFixed(1) || '-'} MB)
                </button>
            </div>
        </div>

        {/* Description & Rating Breakdown */}
        <div className="p-6 space-y-10">
            
            {/* Rating Breakdown Section */}
            {totalReviews > 0 && (
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Ratings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Overall Rating Score */}
                        <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-lg shadow-inner">
                            <p className="text-6xl font-extrabold text-yellow-600">{ratingAvg?.toFixed(1) || '0.0'}</p>
                            <div className="flex items-center space-x-0.5 mt-2">
                                {Array(5).fill(0).map((_, i) => (
                                    <RatingIcon key={i} className={`w-6 h-6 ${i < Math.round(ratingAvg) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                        </div>

                        {/* Breakdown Bars */}
                        <div className="space-y-3 p-4">
                            {/* Reverse the ratings array to show 5-star first, matching the visual style */}
                            {ratings.slice().reverse().map((rating) => (
                                <RatingBar 
                                    key={rating.name} 
                                    name={rating.name.split(' ')[0]} // e.g., "5" instead of "5 star"
                                    count={rating.count} 
                                    totalReviews={totalReviews} 
                                    color="bg-orange-500" // Use a consistent bar color
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Description Section */}
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {description} 
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default SingleAppDetail;
