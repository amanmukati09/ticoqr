import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import profile_image from "../Images/profile.jpg";
import navbar_logo from "../Images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // User data (fetch this from your authentication state)
  const userData = {
    name: "John Doe",
    profilePhoto: profile_image,
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    navigate("/");
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={navbar_logo} alt="Logo" />
          </div>

          {/* User profile photo */}
          {userData && (
            <div className="ml-3 relative">
              <div>
                <button
                  className="bg-indigo-600 flex text-sm rounded-full focus:outline-none"
                  id="user-menu"
                  aria-haspopup="true"
                  onClick={toggleUserMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-10 w-10 rounded-full" src={userData.profilePhoto} alt="" />
                </button>
              </div>
              {/* User dropdown menu */}
              {userMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/edit-profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={closeUserMenu}
                  >
                    Edit Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
