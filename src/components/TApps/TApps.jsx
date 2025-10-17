import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading'; // 👈 import your new loader
const SingleApp = React.lazy(() => import('../../pages/SingleApp/SingleApp'));

const TApps = ({ data }) => {
  const visibleData = data.slice(0, 8);

  return (
    <div className="px-0 sm:px-20 lg:px-60">
      <h1 className="text-3xl text-center p-6 text-black font-semibold mb-2">
        Trending Apps
      </h1>
      <h1 className="text-lg text-zinc-500 mb-3 text-center">
        Explore All Trending Apps on the Market developed by us
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center px-6 pb-4">
        <Suspense fallback={<Loading />}>
          {visibleData.length > 0 ? (
            visibleData.map((sApp) => <SingleApp key={sApp.id} sApp={sApp} />)
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No apps found.
            </p>
          )}
        </Suspense>
      </div>

      {visibleData.length < data.length && (
        <div className="flex justify-center pb-10">
          <Link to="/allApps" className="btn btn-primary">
            See All
          </Link>
        </div>
      )}
    </div>
  );
};

export default TApps;