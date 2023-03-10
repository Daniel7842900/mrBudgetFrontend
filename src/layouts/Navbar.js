import pepe from "../assets/images/pepe.png";
import otter from "../assets/images/otter.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../services/authentication/AuthService";

function Navbar() {
  const [showProfileNav, setShowProfileNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const currentUser = AuthService.getCurrentUser();

  const handleshowProfileNav = () => {
    setShowProfileNav(!showProfileNav);
  };

  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  /**
   * Handle the case where mobile nav was expanded,
   * however, the user increased the screen size without closing it
   */
  const handleResize = () => {
    if (showMobileNav === true && window.innerWidth >= 768) {
      setShowMobileNav(!showMobileNav);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Desktop menu --> */}
        <div className="border-b border-white-700">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-16 w-auto bg-white"
                  src={pepe}
                  alt="Mr.pepe"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" --> */}
                  <Link
                    to="/dashboard"
                    className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/budget"
                    className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Budget
                  </Link>
                  <Link
                    to="/expense"
                    className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Expense
                  </Link>
                  <Link
                    to="/report"
                    className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </Link>
                  <Link
                    to="#"
                    className="text-green-500 transform hover:scale-110 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium pointer-events-none"
                  >
                    Settings
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* <!-- Profile dropdown --> */}
                {/* Profile image */}
                <div className="ml-3 relative">
                  <div onClick={handleshowProfileNav}>
                    <button
                      type="button"
                      className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={otter}
                        alt="otter"
                      />
                    </button>
                  </div>
                  {/* Profile dropdown menu */}
                  {/* conditional rendering for profile nav bar */}
                  {showProfileNav && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      id="user-menu"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-green-500 pointer-events-none"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-green-500 pointer-events-none"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </Link>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-sm text-green-500"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                id="mobile-menu-btn"
                onClick={handleShowMobileNav}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {/* conditional rendering for mobile nav bar */}
      {showMobileNav && (
        <div className="relative min-h-screen z-50" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/budget"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Budget
            </Link>
            <Link
              to="/expense"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Expense
            </Link>
            <Link
              to="/report"
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </Link>
            <Link
              to=""
              className="text-green-500 hover:bg-green-500 hover:text-white hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium pointer-events-none"
            >
              Settings
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-green-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-green-500">
                  {/* <%= _.startCase(user.firstName) %> <%= _.startCase(user.lastName) %> */}
                  {currentUser.firstName} {currentUser.lastName}
                </div>
                <div className="text-sm font-medium text-green-500">
                  {/* <%= user.email %> */}
                  {currentUser.email}
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white pointer-events-none"
              >
                Your Profile
              </Link>
              <Link
                to="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white pointer-events-none"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-green-500 hover:bg-opacity-75 hover:text-white"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
