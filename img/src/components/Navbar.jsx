import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';

const Navbar = () => {
  const { user, setShowlogin,logout,credit } = useContext(Appcontext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-teal-50 to-orange-50 px-4 py-3 shadow-md">
      {/* Logo */}
      <Link to="/home">
        <img
          src={assets.sample}
          className="rounded-3xl h-16 w-24 sm:w-28 lg:w-32 object-contain"
          alt="logo"
        />
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-5 sm:gap-8">
        {user ? (
          <>
            {/* Credits + Username */}
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={() => navigate('/buy')}
                className="flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full hover:scale-105 transition-all duration-300"
              >
                <img className="w-4" src={assets.credit_star} alt="credit" />
                <p className="text-sm font-medium text-gray-600">
                  Credit Left: {credit}
                </p>
              </button>
              <p className="hidden sm:block text-sm text-gray-700 font-medium">
                {user.name}
              </p>
            </div>

            {/* Profile + Dropdown */}
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer drop-shadow"
                src={assets.profile_icon}
                alt="profile"
              />
              <div className="absolute right-0 hidden group-hover:block bg-white border shadow-md rounded z-10 min-w-[120px] mt-2">
                <ul className="p-2 text-sm text-gray-800">
                  <li onClick={logout} className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-5 sm:gap-8">
            {/* Price Button */}
            <button
              onClick={() => navigate('/buy')}
              className="bg-white border border-zinc-800 text-zinc-800 text-sm sm:text-base px-5 py-2 rounded-full hover:bg-zinc-100 transition"
            >
              Price
            </button>

            {/* Login Button */}
            <button
              onClick={() => setShowlogin(true)}
              className="bg-zinc-800 text-white text-sm sm:text-base px-5 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
