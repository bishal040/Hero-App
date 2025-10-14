import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApp from '../../pages/SingleApp/SingleApp';

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = (data || []).filter(
    (item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6">All Books</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredData.length > 0 ? (
          filteredData.map((sApp) => (
            <SingleApp key={sApp.id} sApp={sApp} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No apps found.</p>
        )}
      </div>
    </div>
  );
};

export default AllApps;