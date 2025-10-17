import React, { Suspense, useState } from 'react';
const SingleApp = React.lazy(() => import('../../pages/SingleApp/SingleApp'));

const TApps = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(8); // initially show 8

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 8); // show 8 more each time
  };

  const visibleData = data.slice(0, visibleCount); // slice the data to show only visibleCount

  return (
    <div className='px-0 sm:px-20  lg:px-60'>
      <h1 className="text-3xl text-center p-6 text-black font-semibold mb-2">Trending Apps</h1>
      <h1 className='text-lg text-zinc-500 mb-3 text-center'>Explore All Trending Apps on the Market developed by us</h1>

      <div className="grid 
                      grid-cols-2  
                      md:grid-cols-2 
                      xl:grid-cols-3
                      2xl:grid-cols-4 
                      gap-6 
                      justify-items-center 
                      px-6 pb-4">
        <Suspense fallback={<div>Loading...</div>}>
          {visibleData.map((sApp) => (
            <SingleApp key={sApp.id} sApp={sApp} />
          ))}
        </Suspense>
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center pb-10">
          <button 
            onClick={handleSeeMore} 
            className="btn btn-primary"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default TApps;