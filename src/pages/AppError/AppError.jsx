import React from 'react';

const AppError = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center text-center">
        
        
        <div className="w-64 md:w-80 mb-8">
          <img src="../../src/assets/img/App-Error.png" alt="" />
                   </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          OPPS!! APP NOT FOUND
        </h1>

        <p className="text-gray-500 mb-8 max-w-sm">
          The App you are requesting is not found on our system. please try another apps
        </p>

        <button 
          onClick={() => window.history.back()}
          className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200"
        >
          Go Back!
        </button>
        
      </div>
    </div>
  );
};

export default AppError;