
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import MentorMate from "../assets/Work/mentor.png";
import excel from "../assets/Work/excelConverter.png";
import igraliste from "../assets/Work/igraliste.png";


const projects = [
  {
    name: "Your Mentor Mate",
    backgroundImage: MentorMate, 
    description:
      "A mentoring platform with integrated payment and video call options to facilitate seamless mentor-mentee connections.",
    technologies: ["React", "CSS", "Tailwind", "Node.js", "Express.js"],
    socialLinks: [
      {
        href: "https://github.com/orgs/final-project-24/repositories",
        label: "GitHub Repository",
        icon: <FaGithub size={25} />,
      },
      {
        href: "https://mentor-mate-frontend.onrender.com/",
        label: "Visit MentorMate",
        icon: <FaExternalLinkAlt size={25} />,
      },
    ],
  },
  {
    name: "Excel Converter",
    backgroundImage: excel, 
    description:
      "A simple web app that helps users sort data from Excel files. Automatically generates columns and offers sorting options. Backend integration is planned for data persistence.",
    technologies: ["React", "Tailwind"],
    socialLinks: [
      {
        href: "https://github.com/Milos191405/Excel-converter",
        label: "GitHub Repository",
        icon: <FaGithub size={25} />,
      },
      {
        href: "https://excel-converter-xlm9.onrender.com/",
        label: "Visit Excel Converter",
        icon: <FaExternalLinkAlt size={25} />,
      },
    ],
  },
  {
    name: "Igraonica Igraliste",
    backgroundImage: igraliste, 
    description:
      "A vibrant website for a children's playground in Serbia, designed to highlight its playful atmosphere and services. I am in the process of rewriting the entire codebase from WordPress to React, with plans to introduce new features in the future to enhance the site's functionality.",
    technologies: ["React", "Tailwind", "CSS"],

    socialLinks: [
      {
        href: "https://github.com/Milos191405/Igraliste",
        label: "GitHub Repository",
        icon: <FaGithub size={25} />,
      },
      {
        href: "https://igraliste.onrender.com/",
        label: "Visit Igraonica Igraliste",
        icon: <FaExternalLinkAlt size={25} />,
      },
    ],
  },
];
function Work() {
  return (
    <div
      id="work"
      className="pt-14  min-h-screen bg-[#0a192f] text-gray-300  items-center px-6"
    >
      {/* container */}
      <div className="max-w-[1000px] flex flex-col justify-center w-full h-full   ">
        <div className="">
          <p className="text-xl font-bold  text-grey-300 inline border-b-2  border-blue-600">
            Work
          </p>
          <p className=" py-4">
            Check out some of my recent work
          </p>
        </div>

        {projects.map((project, index) => (
          <article
            key={index}
            id="work"
            className="relative w-[%] mb-10 mt-8 "
          >
            {/* First div (Background Image) */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 opacity-30 bg-cover h-full w-full hover:opacity-55"
              style={{
                backgroundImage: `url(${project.backgroundImage})`, // Set dynamic background image
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Optional fallback image in case image fails */}
              <img
                src={project.backgroundImage}
                alt={project.name}
                className="h-[100%] invisible"
              />
            </div>
            {/* Second div (Content) */}
            <div
              className="relative flex justify-center items-center h-full w-full z-10 "
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <div className="flex flex-col text-white px-3 h-[100%]">
                <p className="text-text-secondary pt-2">Featured Project</p>
                <h3 className="text-lg font-bold text-white pt-3 hover:text-text-secondary cursor-pointer">
                  {project.name}
                </h3>
                <p className="pt-5 text-text-primary">{project.description}</p>

                {/* Technologies List */}
                <ul className="flex flex-wrap mt-5 w-[100%] text-text-secondary">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-sm mr-3">
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="flex space-x-1 pt-5">
                  {project.socialLinks.map(
                    ({ href, label, icon }, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex p-1 pb-5 text-text-primary hover:scale-105 transition-transform duration-300"
                      >
                        {icon}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}

export default Work;
