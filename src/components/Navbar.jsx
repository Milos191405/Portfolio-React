import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Logo from "../assets/MLogo2.png";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "work", label: "Work" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [navHeight, setNavHeight] = useState(80);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setShowScrollToTop(currentScrollPos > 300);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 px-4 flex items-center justify-between transition-all ease-in-out duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${prevScrollPos > 20 ? "h-[70px] bg-[#0a192f]/90 backdrop-blur-md" : "h-[80px] bg-bg-primary"}
      `}
      >
        {/* Logo */}
        <ScrollLink to="home" smooth={true} duration={800} offset={-navHeight}>
          <img
            src={Logo}
            alt="Logo"
            className="h-[60px] lg:h-[60px] p-2 cursor-pointer z-50"
          />
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg xl:text-xl text-header">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="cursor-pointer">
              <ScrollLink
                activeClass="text-blue-400"
                to={to}
                smooth={true}
                duration={800}
                
                spy={true}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleClick}
          className="lg:hidden z-50 w-10 h-10 flex flex-col justify-center items-center cursor-pointer group"
        >
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              nav ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ease-in-out ${
              nav ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              nav ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a192fd9] backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col items-center z-40 text-white 
          ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        >
          {/* Logo inside mobile menu */}
          <div className="absolute top-4 left-4">
            <img src={Logo} alt="Logo" className="h-[50px]" />
          </div>

          {/* Mobile Nav Items */}
          <ul className="flex flex-col gap-10 text-3xl font-semibold justify-center items-center h-full">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={800}
                  
                  spy={true}
                  onClick={closeMenu}
                  className="hover:text-blue-400 transition duration-300 cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition duration-300 z-40"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default Navbar;
