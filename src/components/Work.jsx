
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import MentorMate from "../assets/Work/mentor.png";
import excel from "../assets/Work/excelConverter.png";
import igraliste from "../assets/Work/igraliste.png";
import buekom from "../assets/Work/Buekom.png";


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
    name: "Buekom Help Center",
    backgroundImage: buekom, 
    description:
      "Internal application for company Buekom to help employees with their Markdown files which they are using almost every day. Their is option that they can make admin or guest accounts and manage files. Backend is made with Node.js and Express.js and frontend with React.", 
      
    technologies: ["React", "Tailwind", "Node.js", "Express.js"],
    socialLinks: [
      {
        href: "https://github.com/Milos191405/buekom-help-center",
        label: "GitHub Repository",
        icon: <FaGithub size={25} />,
      },
      {
        href: "https://buekom-help-center.onrender.com//",
        label: "Visit Buekom help center",
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
      <div className="max-w-[1000px] flex flex-col justify-center w-full h-full md:max-w-[700px] xl:max-w-[1200px] md:mx-auto">
        <div className="">
          <p className="text-xl md:text-2xl xl:text-4xl font-bold  text-grey-300 inline border-b-2  border-blue-600">
            Work
          </p>
          <p className=" py-4 md:text-lg xl:text-2xl">Check out some of my recent work</p>
        </div>

        {projects.map((project, index) => (
          <article
            key={index}
            id="work"
            className="relative  mb-10 mt-8 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1500px] lg:  lg:grid lg:grid-cols-12"
          >
            {/* First div (Background Image) */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-cover h-full w-full hover:opacity-60 lg:col-start-1 lg:col-end-7"
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
              className="relative flex justify-center items-center h-full w-full z-10 lg:col-start-6 lg:col-end-13 lg:px-3  "
            >
              <div className="flex flex-col text-white  px-3  lg:px-0 h-[100%] lg:text-end ">
                <p className="text-text-secondary md:text-lg xl:text-xl  pt-2">
                  Featured Project
                </p>
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-white  pt-3 hover:text-text-secondary cursor-pointer">
                  {project.name}
                </h3>
                <p className="pt-5 text-text-primary md:text-lg xl:text-xl">
                  {project.description}
                </p>

                {/* Technologies List */}
                <ul className="flex flex-wrap mt-5 w-[100%] text-text-secondary justify-end  ">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-sm mr-3 xl:ml-3 md:text-lg  ">
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="flex space-x-1 pt-5 lg:justify-end ">
                  {project.socialLinks.map(
                    ({ href, label, icon }, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex p-1 pb-5 text-text-primary   hover:scale-105 transition-transform duration-300"
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
