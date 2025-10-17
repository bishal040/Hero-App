import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#011627] text-gray-300 py-6 px-6">
      <div className="flex flex-row justify-between items-center border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="../../src/assets/img/logo.png" alt="Hero.io logo" className="w-8 h-8" />
          <h1 className="font-semibold text-lg">HERO.IO</h1>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm mb-2">Social Links</p>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="#" className="hover:text-white transition-all"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-all"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition-all"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 text-sm text-gray-400">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;