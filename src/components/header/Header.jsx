import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header flex container mx-auto pt-2.5 justify-between items-center px-5 mt-5">
        <div>
          <span className="text-slate-800 font-bold">Astro</span>
          <span className="text-slate-500">ship</span>
        </div>

        <nav className="nav flex  gap-5">
          <NavLink to="/" className="lg:px-3 ">
            <span className="text-gray-600 hover:text-gray-800">Home</span>
          </NavLink>

          <NavLink to="/About" className="lg:px-3">
            <span className="text-gray-600 hover:text-gray-800">About</span>
          </NavLink>
        </nav>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <span className="text-gray-600 font-medium">Login</span>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <span className="bg-black rounded text-center text-white px-4 py-2 ml-3 border-2 border-transparent   hover:text-white">
              Sign up
            </span>
          </a>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
