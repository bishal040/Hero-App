import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Define a reusable style for active NavLinks
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#6D28D9', // A purple color to match the button
    textUnderlineOffset: '8px',
  };

  const navLinks = (
    <>
      <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink></li>
      <li><NavLink to="/allApps" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Apps</NavLink></li>
      <li><NavLink to="/installedApps" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Installation</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Start Section: Logo and Title */}
      <div className="navbar-start">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        {/* Logo and Site Name */}
        <a className="btn btn-ghost text-xl font-bold">
          {/* You can replace this div with your actual <img> tag for the logo */}
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div> 
          HERO.IO
        </a>
      </div>

      {/* Center Section: Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 font-semibold">
          {navLinks}
        </ul>
      </div>

      {/* End Section: Button */}
      <div className="navbar-end">
        <a className="btn bg-purple-600 text-white hover:bg-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;