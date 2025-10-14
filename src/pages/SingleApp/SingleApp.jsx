import React from 'react';

const SingleApp = ({ sApp }) => {
  if (!sApp) return null; // skip rendering if undefined

  const { image, ratingAvg, title, downloads } = sApp;

  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure>
        <img
          src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
          alt={title || "App"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline flex items-center gap-1">
            <img className="w-5" src="../../../src/assets/img/icon-downloads.png" alt="downloads" />
            <p className="text-green-300">{downloads}</p>
          </div>
          <div className="badge badge-outline flex items-center gap-1">
            <img className="w-5" src="../../../src/assets/img/icon-ratings.png" alt="ratings" />
            <p className="text-yellow-600">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;