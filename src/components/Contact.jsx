import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaCertificate, FaXing } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  { href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/", label: "LinkedIn", icon: <FaLinkedin size={30} /> },
  { href: "https://www.xing.com/profile/Milos_Mirkovic090474", label: "Xing", icon: <FaXing size={24} /> },
  { href: "https://github.com/Milos191405", label: "GitHub", icon: <FaGithub size={30} /> },
  { href: "mailto:milos.mirkovic7@gmail.com", label: "Email", icon: <HiOutlineMail size={30} /> },
  { href: "/Milos Mirkovic CV.pdf", label: "Resume", icon: <BsFillPersonLinesFill size={30} />, download: true },
];

const certificates = [
  { label: "Web Development", href: "/Zertifikat DCI.pdf" },
  { label: "Data Analyst", href: "/Data Analyst.pdf" },
];

function Contact() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="contact" className="w-full bg-[#0a192f] text-gray-300 px-6 pt-20">
      <div className="max-w-[1200px] md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col items-center text-center ">
        <h2 className="text-4xl font-bold border-b-4 border-blue-600 mb-8">
          Contact
        </h2>

        <p className="text-gray-400 max-w-[600px] mb-8">
          I’m always open to new opportunities, collaborations, and professional
          networking. Let’s connect and see how we can collaborate!
        </p>

        <a
          href="mailto:milos.mirkovic7@gmail.com"
          className="custom-button border border-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Write Me
        </a>

        {/* Social ikonice i sertifikati */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {socialLinks.map(({ href, label, icon, download }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              download={download ? true : undefined}
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
            >
              {icon}
            </a>
          ))}

          {/* Sertifikati dropdown */}
          <div
            className="relative "
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
              aria-label="Certificates"
            >
              <FaCertificate size={30} />
            </button>

            {isDropdownOpen && (
              <div className="absolute bottom-10  mt-10 flex flex-col gap-2 bg-bg-primary text-white p-2 rounded shadow-lg z-50 pointer-events-auto w-48">
                {certificates.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Designed & built with ❤️ by Milos Mirkovic — 2025
        </p>
      </div>
    </section>
  );
}

export default Contact;
