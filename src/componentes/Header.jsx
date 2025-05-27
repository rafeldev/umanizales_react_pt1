import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/welcome"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              Welcome
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
