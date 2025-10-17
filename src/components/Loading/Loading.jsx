import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-transparent">
      <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[loading_3s_ease-in-out_infinite]" />
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-700 tracking-wide">
        Loading trending apps...
      </p>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;