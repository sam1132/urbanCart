import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBoxArchive, FaHeart, FaBars,  } from "react-icons/fa6";
import { FaTimes,FaSearch } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import logo from "../assets/Logo/urban.jpg";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink
                to="/"
                className="ml-2 text-xl font-bold flex items-center gap-x-2"
              >
                <img className="h-8 w-auto" src={logo} alt="Company Logo" />
                UrbanCart
              </NavLink>
            </div>
            <div className="md:flex md:items-center md:ml-6">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center pl-3 cursor-pointer">
                  <FaSearch className="text-gray-500 " />
                </span>
                <input
                  type="text"
                  className="bg-gray-100 ml-2 w-[200px] md:w-[260px] lg:w-[390px] focus:ring-0 border-none rounded-full pl-10 pr-4 py-2 focus:outline-none"
                  placeholder="Search products..."
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex">
              {isAuthenticated ? (
                <>
                  <NavLink
                    to="/profile"
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
                  >
                    Signup
                  </NavLink>
                </>
              )}
              <NavLink
                to="/cart"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
              >
                Cart
              </NavLink>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
                >
                  Account
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <NavLink
                        to="/profile"
                        className="flex gap-x-2 items-center px-4 py-2 text-lg text-gray-700 hover:text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <span>
                          <CgProfile />
                        </span>
                        Profile
                      </NavLink>
                      <NavLink
                        to="/wishlist"
                        className="flex items-center gap-x-2 hover:text-black px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <span>
                          <FaHeart className="h-6 w-4" />
                        </span>
                        Wishlist
                      </NavLink>
                      <NavLink
                        to="/my-order"
                        className="flex items-center gap-x-2 px-4 py-2 text-lg text-gray-700 hover:text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <span>
                          <FaBoxArchive className="h-4 w-4" />
                        </span>
                        My order
                      </NavLink>
                      <NavLink
                        to="/become-seller"
                        className="flex items-center gap-x-2 px-4 py-2 text-lg text-gray-700 hover:text-black hover:bg-gray-100"
                        role="menuitem"
                      >
                        <span>
                          <BsShopWindow className="h-4 w-4" />
                        </span>
                        Become a Seller
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md md:text-2xl font-medium"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile"
                  className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signin"
                  className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Signup
                </NavLink>
              </>
            )}
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Cart
            </NavLink>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Account
            </button>
            {isDropdownOpen && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/profile"
                  className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/wishlist"
                  className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Wishlist
                </NavLink>
                <NavLink
                  to="/my-order"
                  className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  My order
                </NavLink>
                <NavLink
                  to="/become-seller"
                  className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Become a Seller
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
