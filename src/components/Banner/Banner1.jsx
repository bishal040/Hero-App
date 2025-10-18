import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Button1 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        We Build <span className="text-purple-600">Productive</span> Apps
      </h1>

      <p className="max-w-2xl text-gray-600 text-base sm:text-lg mb-6">
        At <span className="font-semibold">HERO.IO</span>, we craft innovative
        apps designed to make everyday life simpler, smarter, and more exciting.
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

        <div className="flex gap-4 mb-10">
          <button
            onClick={() =>
              window.open("https://play.google.com/store/apps", "_blank")
            }
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaGooglePlay className="text-xl text-green-500" />
            <span>Google Play</span>
          </button>

          <button
            onClick={() =>
              window.open("https://apps.apple.com/", "_blank")
            }
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaApple className="text-xl text-black" />
            <span>App Store</span>
          </button>
        </div>
      <div className="relative">
        <img
          src="https://i.postimg.cc/CLwJG91H/hero.png"
          alt="App Preview"
          className="w-full  rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Button1;