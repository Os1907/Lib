import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Fake Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">MyApp</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/atom"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors duration-300`
            }
          >
            Atom
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;