import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#6D28D9',
    textUnderlineOffset: '6px',
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-black"
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allApps"
          className="text-black"
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installedApps"
          className="text-black"
          style={({ isActive }) => isActive ? activeLinkStyle : undefined}
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <img src="../../src/assets/img/logo.png" alt="Logo" className="w-12"/>
          <p className="font-semibold text-black">HERO.IO</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 font-semibold text-black">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-purple-600 text-white hover:bg-purple-700">
          <FaGithub className="mr-2" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;