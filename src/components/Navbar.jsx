import { Link, NavLink } from "react-router-dom"; // Correctly import Link
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Rename to avoid confusion
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import LogoCrop from "../assets/LogoCrop.jpg";

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
    href: "/MilosResume.pdf",
    label: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "bg-[#565f69]",
  },
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
      className={`w-full fixed top-0 h-[80px] flex flex-row items-center justify-between bg-bg-primary px-4 text-gray-300 border-b-[1px] border-bg-primary z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
     {/* Logo */}
<div>
  <ScrollLink to="home" smooth={true} duration={500}>
    <img src={LogoCrop} alt="Logo" className="w-[80px]" />
  </ScrollLink>
</div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <ScrollLink
              to={to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              {label}
            </ScrollLink>
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
                    duration={500}
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
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
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
