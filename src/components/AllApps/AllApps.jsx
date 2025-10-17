import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApp from '../../pages/SingleApp/SingleApp';
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = (data || []).filter(
    (item) => item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-6">
      <h1 className="text-3xl font-semibold text-center mb-3 text-black">
        Our All Applications
      </h1>
      <h3 className="text-lg text-center mb-6 text-zinc-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </h3>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center text-black">
          ({filteredData.length}) Apps Found
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-60 bg-white shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Apps.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
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