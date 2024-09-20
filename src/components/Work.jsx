import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MentorMate from '../assets/Work/mentor.png'
import CSS from "../assets/css.png"; // Assuming you're using this image for the background

const projects = [
  {
    name: "Your Mentor Mate",
    backgroundImage:MentorMate,
    description:"A mentoring platform with integrated payment and video call options facilitates seamless mentor-mentee connections.",
    technologies: ["React", "CSS", "Tailwind", "Node.js", "Express.js"],
    socialLinks: [
      {
        href: "https://github.com/orgs/final-project-24/repositories",
        label: "GitHub",
        icon: <FaGithub size={25} />,
      },
      {
        href: "https://mentor-mate-frontend.onrender.com/",
        label: "MentorMate",
        icon: <FaExternalLinkAlt size={25} />,
      },
    ],
  },
];

function Work() {
  return (
    <div
      name="work"
      className="pt-14 w-full min-h-screen bg-[#0a192f] text-gray-300 lg:flex items-center"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20 sm:pt-20 md:px-auto md:py">
        <div className="">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 text-grey-300 border-blue-600">
            Work
          </p>
          <p className="sm:text-lg md:text-xl pt-4 py-5">
            Check out some of my recent work
          </p>
        </div>

        {projects.map((project, index) => (
          <article
            key={index}
            id="work"
            className="relative grid grid-cols-2 grid-rows-1 h-[450px] w-[90%] mx-auto mb-1"
          >
               {/* First div (Background Image) */}
            <div
              className="col-span-2 row-span-1 opacity-20 bg-cover h-[100%]  hover:opacity-55"
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
              className="col-span-2 row-span-1 absolute flex justify-center pt-5 h-full items-center rounded-md z-10"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <div className="flex flex-col text-white px-3 h-[100%]">
                <p className="text-text-secondary pt-2">Featured Project</p>
                <h3 className="text-lg font-bold text-white pt-3">
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
                        className="flex p-1 text-text-primary hover:scale-105 transition-transform duration-300"
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
