import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#011627] text-gray-300 py-5 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-gray-400 uppercase mb-3 tracking-wider">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-all">Home</Link></li>
            <li><Link to="/allApps" className="hover:text-white transition-all">All Apps</Link></li>
            <li><Link to="/installedApps" className="hover:text-white transition-all">Installed Apps</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center mb-5">
        <Link to="/" className="flex items-center gap-2 ml-2">
          <img src="https://i.postimg.cc/wTF20FyL/logo.png" alt="Logo" className="w-12" />
          <p className="font-semibold text-white">HERO.IO</p>
        </Link>
        <p className="text-gray-400 text-sm max-w-md">
          Building bridges between code and creativity — empowering developers to do more with less.
        </p>
      </div>
        <div className="flex flex-col items-center md:items-end mt-4">
          <h3 className="font-semibold text-gray-400 uppercase mb-3 tracking-wider">Stay Connected</h3>
          <div className="flex gap-5 text-2xl">
            <a href="https://github.com/bishal040" target='_blank' className="hover:text-white transition-all"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bishal040/" target='_blank' className="hover:text-white transition-all"><FaLinkedin /></a>
            <a href="https://www.facebook.com/bishal040" target='_blank' className="hover:text-white transition-all"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-2 pt-2 text-center text-sm text-gray-400 flex flex-col md:flex-row md:justify-between">
        <p>© 2025 HERO.IO — All rights reserved</p>
        <p className="mt-1 text-gray-500">
          Crafted with <span className="text-red-500"></span> by <a href='https://www.facebook.com/bishal040' target='_blank' className="font-medium text-gray-300">Istiak Ahmmed Bishal</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;