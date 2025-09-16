import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaCertificate, FaXing } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
  {
    href: "/Zertifikat DCI.pdf",
    label: "Certificates",
    icon: <FaCertificate size={24} />,
  },
];

function SocialSidebar() {
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
      </div>
      {/* Tanka linija pored ikonica */}
      <div className="w-[1px] h-32 bg-gray-600 mt-4 mx-auto"></div>
    </div>
  );
}

export default SocialSidebar;
