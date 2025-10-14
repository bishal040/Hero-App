import React, { useState } from 'react';

const AllApps = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data dynamically based on search term
  const filteredData = (data || []).filter(
    (item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6">All Books</h1>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredData.length > 0 ? (
          filteredData.filter(Boolean).map((sApp) => (
            <div key={sApp?.id || Math.random()} className="card bg-base-100 w-80 shadow-sm">
              <figure>
                <img
                  src={
                    sApp?.image ||
                    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  }
                  alt={sApp?.title || 'App'}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{sApp?.title || 'Untitled'}</h2>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline flex items-center gap-1">
                    <img
                      className="w-5"
                      src="../../../src/assets/img/icon-downloads.png"
                      alt="downloads"
                    />
                    <p className="text-green-300">{sApp?.downloads ?? '-'}</p>
                  </div>
                  <div className="badge badge-outline flex items-center gap-1">
                    <img
                      className="w-5"
                      src="../../../src/assets/img/icon-ratings.png"
                      alt="ratings"
                    />
                    <p className="text-yellow-600">{sApp?.ratingAvg ?? '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No apps found.</p>
        )}
      </div>
    </div>
  );
};

export default AllApps;