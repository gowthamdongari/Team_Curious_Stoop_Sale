import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-10 w-10 rounded-full shadow-md"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/Eventregister"
                    className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                  >
                    <span>Event Register</span>
                  </Link>
                  <Link
                    to="/testimonial"
                    className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                  >
                    <span>Testimonial</span>
                  </Link>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                  >
                    Highlights
                  </a>
                  {/* <a
                    href="#"
                    className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                  >
                    Pricing
                  </a> */}
                  <a
                    href="#"
                    className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                Sign in
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium ml-4 transition duration-300 ease-in-out">
                Sign up
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-yellow-500 text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      !isOpen
                        ? "M4 6h16M4 12h16m-7 6h7"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/Eventregister"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                <span>Event Register</span>
              </Link>

              <Link
                to="/testimonial"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                <span>Testimonial</span>
              </Link>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                Highlights
              </a>
              {/* <a
                href="#"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                Pricing
              </a> */}
              <a
                href="#"
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                FAQ
              </a>
              <button className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Sign in
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Your other components go here */}
    </div>
  );
}

export default TopNavBar;
