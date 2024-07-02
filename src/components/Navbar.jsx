import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/react.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" className="w-[50px]" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer"
        aria-controls="mobile-menu"
        aria-expanded={nav ? "true" : "false"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"
        }
      >
        <li
          onClick={closeMenu}
          className="text-2xl py-6 w-3/4 text-center  hover:bg-white hover:text-gray-700 mb-2"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={closeMenu}
          className="text-2xl py-6 w-3/4 text-center   hover:bg-white hover:text-gray-700 mb-2"
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={closeMenu}
          className="text-2xl py-6 w-3/4 text-center  hover:bg-white hover:text-gray-700 mb-2"
        >
          <Link to="/skills">Skills</Link>
        </li>
        <li
          onClick={closeMenu}
          className="text-2xl py-6 w-3/4 text-center  hover:bg-white hover:text-gray-700 mb-2"
        >
          <Link to="/work">Work</Link>
        </li>
        <li
          onClick={closeMenu}
          className="text-2xl py-6 w-3/4 text-center  hover:bg-white hover:text-gray-700 mb-2"
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
