import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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

function Contact() {
  return (
    <section id="contact" className="w-full  bg-[#0a192f]  p-4 pt-16  ">
      <div className=" flex flex-col items-center justify-center w-full mb-40 ">
        <p className="text-sm text-center text-blue-600 mb-1">What's next?</p>
        <p className="text-xl text-center  text-gray-300 mb-3">Contact</p>
        <p className="text-gray-500">
          Although I’m still in the early stages of my programming journey, I’m
          eager to learn, grow, and make new connections. Feel free to reach out
          if you have advice or opportunities for collaboration! I’d love to
          connect, exchange ideas, and expand my network.
        </p>
        <div className="mt-5">
          <a
            href="mailto:milos.mirkovic7@gmail.com?subject=Request for collaboration&body=Contents of email"
            className="custom-button text-text-secondary border-[1px] inline-flex items-center border-text-secondary text-sm px-2 py-2 rounded-md z-10"
          >
            Let's talk
          </a>
        </div>
      </div>
      <div className=" bottom-0  justify-center  ">
        <div className=" flex space-x-1 justify-center  ">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex p-1 text-text-primary hover:scale-105 transition-transform duration-300`}
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="text-text-primary text-center text-sm">
          Designed and Built by Milos Mirkovic
        </div>
      </div>
    </section>
  );
}

export default Contact;
