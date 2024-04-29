
import Logo from "../assets/react.png";
import { FaBars } from "react-icons/fa";


function Navbar() {
  
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </div>

        {/* Menu */}

        <ul className="md:flex ">
          <li >Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div>
        <FaBars />   
      </div>

     
      <div className="hidden"></div>
    </>
  );
}

export default Navbar;
