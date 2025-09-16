import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaCertificate, FaXing } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/milos-mirkovic-7976726b/",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    href: "https://www.xing.com/profile/Milos_Mirkovic090474",
    label: "Xing",
    icon: <FaXing size={24} />,
  },
  {
    href: "https://github.com/Milos191405",
    label: "GitHub",
    icon: <FaGithub size={24} />,
  },
  {
    href: "mailto:milos.mirkovic7@gmail.com",
    label: "Email",
    icon: <HiOutlineMail size={24} />,
  },
  {
    href: "/Milos Mirkovic CV.pdf",
    label: "Resume",
    icon: <BsFillPersonLinesFill size={24} />,
  },
];

const certificates = [
  { label: "Web Development", href: "/Zertifikat DCI.pdf" },
  { label: "Data Analyst", href: "/Data Analyst.pdf" },
];

function SocialSidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-5">
      <div className="flex flex-col gap-4">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-blue-500 transition-transform transform hover:-translate-y-1 duration-300"
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
          {/* Dugme za sertifikate */}
          <button
            className="text-gray-400 hover:text-blue-500 transition-transform transform hover:-translate-y-1 duration-300 border-1 "
            aria-label="Certificates"
          >
            <FaCertificate size={24} />
          </button>

          {/* Dropdown sa sertifikatima */}
          {isDropdownOpen && (
            <div
  className="absolute top-0 left-6 flex flex-col gap-2 bg-bg-primary text-white p-2 rounded shadow-lg z-50 pointer-events-auto w-48"
>
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

      <div className="w-[1px] h-32 bg-gray-600 mt-4 mx-auto"></div>
    </div>
  );
}

export default SocialSidebar;
