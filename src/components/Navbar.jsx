import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import Logo from "../assets/react.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from '../assets/Logo.png'

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
    label: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    bgColor: "bg-blue-600",
  },
  {
    href: "https://github.com/Milos191405",
    label: "GitHub",
    icon: <FaGithub size={30} />,
    bgColor: "bg-[#333333]",
  },
  {
    href: "mailto:milos.mirkovic7@gmail.com?subject=Request for collaboration&body=Contents of email",
    label: "Email",
    icon: <HiOutlineMail size={30} />,
    bgColor: "bg-[#6fc2b0]",
  },
  {
    href: "/MilosResume.pdf",
    label: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "bg-[#565f69]",
  },
];

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <nav className=" w-full fixed top-0  h-[100px] flex flex-row items-center justify-between  px-4 bg-[#0a192f] text-gray-300  ">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            className="w-[100px]"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-2xl"
        aria-controls="mobile-menu"
        aria-expanded={nav ? "true" : "false"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      {nav && (
        <>
          {/* Prevent scrolling when menu is open */}
          <style>{`body { overflow: hidden; }`}</style>

          <div className="fixed top-0 left-0 w-screen h-screen bg-[#0a192f]/10  text-gray-300 flex">
            {/* Blurred overlay on the left 1/4 */}
            <div
              className="w-1/4 h-screen mt-[100px] backdrop-blur-sm z-40 "
              onClick={closeMenu}
            ></div>

            {/* Mobile menu on the right 3/4 */}
            <ul
              id="mobile-menu"
              className="pt-[200px]  w-3/4 h-screen  bg-[#0c103a] text-white flex flex-col items-center z-50 relative "
            >
              {navLinks.map(({ to, label }) => (
                <li
                  key={to}
                  onClick={closeMenu}
                  className=" text-base p-5   text-center hover:bg-white hover:text-gray-700  "
                >
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ href, label, icon, bgColor }) => (
            <li
              key={href}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 pl-3 pr-3 duration-300 ${bgColor}`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../assets/react.png";
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);
//   const closeMenu = () => setNav(false);

//   return (
//     <nav className="fixed w-full h-[100px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300">
//       {/* Logo */}
//       <div>
//         <img src={Logo} alt="Logo" className="w-[50px]" />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6 text-lg">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/work"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Work
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/skills"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Skills
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600" : "hover:text-blue-600"
//             }
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>

//       {/* Hamburger Icon */}
//       <div
//         onClick={handleClick}
//         className="md:hidden z-10 cursor-pointer text-2xl"
//         aria-controls="mobile-menu"
//         aria-expanded={nav ? "true" : "false"}
//       >
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-screen h-screen bg-[#0a192f] text-gray-300 flex ${
//           nav ? "flex" : "hidden"
//         }`}
//       >
//         {/* Blurred overlay on the left 1/4 */}
//         <div
//           className={`w-1/4 h-screen backdrop-blur-sm ${
//             nav ? "block" : "hidden"
//           }`}
//           onClick={closeMenu}
//         ></div>

//         {/* Mobile menu on the right 3/4 */}
//         <ul
//           id="mobile-menu"
//           className={`absolute top-0 right-0 w-3/4 h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center ${
//             nav ? "block" : "hidden"
//           }`}
//         >
//           <li
//             onClick={closeMenu}
//             className="text-2xl py-6 w-3/4 text-center hover:bg-white hover:text-gray-700 mb-2"
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             onClick={closeMenu}
//             className="text-2xl py-6 w-3/4 text-center hover:bg-white hover:text-gray-700 mb-2"
//           >
//             <Link to="/work">Work</Link>
//           </li>
//           <li
//             onClick={closeMenu}
//             className="text-2xl py-6 w-3/4 text-center hover:bg-white hover:text-gray-700 mb-2"
//           >
//             <Link to="/skills">Skills</Link>
//           </li>
//           <li
//             onClick={closeMenu}
//             className="text-2xl py-6 w-3/4 text-center hover:bg-white hover:text-gray-700 mb-2"
//           >
//             <Link to="/about">About</Link>
//           </li>
//           <li
//             onClick={closeMenu}
//             className="text-2xl py-6 w-3/4 text-center hover:bg-white hover:text-gray-700 mb-2"
//           >
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Social Icons */}
//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 pl-3 pr-3 duration-300 bg-blue-600">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://www.linkedin.com/in/milos-mirkovic-7976726b/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               LinkedIn <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 pl-3 pr-3 duration-300 bg-[#333333]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://github.com/Milos191405"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//             >
//               GitHub <FaGithub size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 pl-3 pr-3 duration-300 bg-[#6fc2b0]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="mailto:milos.mirkovic7@gmail.com?subject=Request for collaboration&body=Contents of email"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Email"
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 pl-3 pr-3 duration-300 bg-[#565f69]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/MilosResume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Resume"
//             >
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
