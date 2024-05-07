import { useState } from "react";
import Logo from "../assets/react.png";
import { FaBars,FaTimes, FaFacebook, FaLinkedin } from "react-icons/fa";


function Navbar() {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav)
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </div>

        {/* Menu */}

        <ul className="hidden md:flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden  z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu  */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"
          }
        >
          <li className="text-3xl py-6  w-full text-center ">Home</li>
          <li className="text-3xl py-6  w-full text-center ">About</li>
          <li className="text-3xl py-6  w-full text-center ">Skills</li>
          <li className="text-3xl py-6  w-full text-center ">Projects</li>
          <li className="text-3xl py-6  w-full text-center ">Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      {/* <div className="">
        <FaFacebook />
        <FaLinkedin />
      </div> */}
    </>
  );
}

export default Navbar;
