import React from 'react';

const SingleAppGrid = ({ apps }) => {
  if (!apps || apps.length === 0)
    return <p className="text-gray-500 text-center">No apps found</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 p-2">
      {apps.map((app) => (
        <SingleApp key={app.id} sApp={app} />
      ))}
    </div>
  );
};

export default SingleAppGrid;