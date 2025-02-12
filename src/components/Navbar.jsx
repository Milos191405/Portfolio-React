//import { Link, NavLink } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; 
import { FaBars, FaTimes, FaGithub, FaLinkedin,FaCertificate } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/MLogo2.png";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "work", label: "Work" },
  { to: "contact", label: "Contact" },
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
    href: "/Milos Mirkovic CV.pdf",
    label: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "bg-[#565f69]",
  },
  {
    
    href: "/CertificateDCI.pdf",
    label: "Certificates",
    icon: <FaCertificate size={30} />,
    bgColor: "bg-blue-600",
  
  }

];

function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setVisible(true); // Show navbar when scrolling up
    } else {
      setVisible(false); // Hide navbar when scrolling down
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full fixed top-0 h-[80px] lg:h-[100px]  flex flex-row items-center justify-between bg-bg-primary px-4 text-gray-300 border-b-[1px] border-white z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div>
        <ScrollLink to="home" smooth={true} duration={800}>
          <img
            src={Logo}
            alt="Logo"
            className="h-[80px] p-2  lg:h-[100px]  lg:p-2 cursor-pointer "
          />
        </ScrollLink>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 text-lg xl:text-xl cursor-pointer ">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <ScrollLink
              to={to}
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className="hover:text-text-secondary active:text-text-primary"
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="lg:hidden z-10 cursor-pointer text-2xl"
        aria-controls="mobile-menu"
        aria-expanded={nav ? "true" : "false"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <>
          <style>{`body { overflow: hidden; }`}</style>

          <div className="fixed top-0 left-0 w-screen h-screen bg-[#0a192f]/10 text-gray-300 flex">
            <div
              className="w-1/4 h-screen top-[80px] backdrop-blur-sm z-50 relative"
              onClick={closeMenu}
            ></div>

            <ul
              id="mobile-menu"
              className="pt-[200px] w-3/4 h-screen bg-[#111f4d] text-text-secondary flex flex-col items-center z-20 relative"
            >
              {navLinks.map(({ to, label }) => (
                <li
                  key={to}
                  onClick={closeMenu}
                  className="text-base p-5 text-center hover:bg-white hover:text-gray-700"
                >
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={800}
                    onClick={closeMenu}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Social Icons */}
      <div
        className={`fixed left-0 transition-all duration-300 ${
          visible
            ? "top-[calc(50vh-80px)] xl:top-[calc(50vh-100px)]"
            : "top-[50vh]"
        }`}
      >
        {/*  Navbar content  */}
        <ul>
          {socialLinks.map(({ href, label, icon, bgColor }) => (
            <li
              key={href}
              className={` hidden lg:flex lg:w-[180px] lg:h-[60px]   lg:justify-between lg:items-center ml-[-120px] hover:ml-0 pl-3 pr-3 duration-300 ${bgColor}`}
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
