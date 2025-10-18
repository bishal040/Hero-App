import React from "react";
import { Link } from "react-router-dom";

const SingleApp = ({ sApp }) => {
  if (!sApp) return null;
  const { id, image, ratingAvg, title, downloads } = sApp;
  const formatDownloads = (num) => {
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num;
  };
  return (
    <Link
      to={`/details/${id}`}
      className="block w-50 rounded-xl overflow-hidden border border-gray-200 bg-white shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center bg-gray-100 h-40">
          <img
            src={
              image ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={title || "App"}
            className="object-contain w-3/4 h-36 p-2 rounded-lg"
          />
        </div>
        <div className="px-3 py-2 flex flex-col justify-center gap-1 bg-white">
          <h2 className="text-sm font-semibold text-gray-900 text-center truncate">
            {title || "Untitled App"}
          </h2>

          <div className="flex justify-between items-center text-xs mt-1">
            <div className="flex items-center gap-1 text-emerald-600 font-medium">
              <img
                src="https://i.postimg.cc/hPKMLNj9/icon-downloads.png"
                alt="downloads"
                className="w-4 h-4"
              />
              <span>{formatDownloads(downloads)}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500 font-medium">
              <img
                src="https://i.postimg.cc/Yqt86T9N/icon-ratings.png"
                alt="rating"
                className="w-4 h-4"
              />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;