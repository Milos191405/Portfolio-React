import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import MentorMate from "../assets/Work/mentor.png";
import excel from "../assets/Work/excelConverter.png";
import igraliste from "../assets/Work/igraliste.png";
import Smilja from "../assets/Work/Smilja.png";
import Bundesliga from "../assets/Work/Bundesliga.png";
import Jobs from "../assets/Work/JobsAnalyse.png";
import Properties from "../assets/Work/Properties.png";

const webProjects = [
  {
    name: "Psiholog Smilja Igic",
    shortDescription: "Fully responsive psychologist website built with Next.js and optimized for SEO.",
    description: `• Designed and developed a fully responsive website for a licensed psychologist
• Built using Next.js, Tailwind CSS, and JavaScript
• Implemented clean and accessible UI/UX with a focus on clarity and trust
• Deployed via Vercel with optimized SEO and performance settings
• Includes dynamic routing, contact form, and structured content sections`,
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    backgroundImage: Smilja,
    link: "https://psiholog-smilja-igic.vercel.app/",
    github: "https://github.com/Milos191405/psiholog_smilja_igic"
  },
  {
    name: "YourMentorMate",
    shortDescription: "Mentoring platform with role-based auth, booking, and payment integration.",
    description: `• Built with React (Vite), TypeScript, CSS, and Tailwind CSS
• Developed a mentoring platform for mentors and mentees
• Implemented role-based authentication, calendar booking, and secure payments
• Users receive automatic video call links upon booking
• Focused on responsive design and intuitive UI/UX
• Fully deployed but no longer actively maintained`,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    backgroundImage: MentorMate,
    link: "https://mentor-mate-frontend.onrender.com/",
    github: "https://github.com/Milos191405/mentor-mate"
  },
  {
    name: "Igraliste",
    shortDescription: "Playground site migrated from WordPress to modular React.",
    description: `• Migrated an existing WordPress site for a children's playroom
• Goal: make content like blogs and events easier to manage
• Rebuilt layout with reusable components and Tailwind styling
• Focused on structure, content separation, and scalability
• Blog functionality planned for future updates
• Considering transition to Next.js for static generation and SEO`,
    technologies: ["React", "Tailwind CSS"],
    backgroundImage: igraliste,
    link: "https://igraliste.onrender.com/",
    github: "https://github.com/Milos191405/igraliste"
  }
];

const dataProjects = [
  {
    name: "Bundesliga 2023/24 Analysis",
    shortDescription: "SQL-based team performance analysis with clustering and insights.",
    description: `• Analyzed Bundesliga 2023/24 performance using SQL
• Correlated metrics like shots, goals, and possession
• Clustered team data by playing style and efficiency
• Generated ranking and prediction insights
• Built scatter plots and heatmaps for comparison`,
    technologies: ["SQL", "Data Analysis"],
    backgroundImage: Bundesliga,
    link: "#",
    github: "https://github.com/Milos191405/Bundesliga-2023-2024"
  },
  {
    name: "Job Market SQL Analysis",
    shortDescription: "SQL analysis of 700k+ job posts to uncover salary and skill trends.",
    description: `• Analyzed 700,000+ job postings in 2023 using SQL
• Focused on salary, remote work, and degree requirements
• Identified top-paying roles and key required skills
• Explored trends in work-from-home and hybrid setups
• Visualized results via pie charts and bar graphs`,
    technologies: ["SQL", "Data Analysis"],
    backgroundImage: Jobs,
    link: "#",
    github: "https://github.com/Milos191405/SQL-Job-Analyse"
  },
  {
    name: "House Sales Analysis",
    shortDescription: "EDA on King County housing data using Python and visual tools.",
    description: `• Used Python (pandas, numpy, matplotlib, seaborn) for EDA
• Explored price gaps between waterfront and non-waterfront homes
• Assessed renovation impact and build year on pricing
• Mapped affordability by postal code
• Cleaned missing values and handled outliers`,
    technologies: ["Python", "Pandas", "Matplotlib"],
    backgroundImage: Properties,
    link: "#",
    github: "https://github.com/Milos191405/Python-House-properties"
  }
];

const ProjectCard = ({ project, delay }) => (
  <FadeIn delay={delay}>
    <motion.div
      className=" relative group rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      {/* Image with hover overlay */}
      <div
        className="relative h-[px] md:h-[300px] md:max-w-[700px]  xl:max-w-[1200px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105 "
        style={{ backgroundImage: `url(${project.backgroundImage})` }}
      >
       <div className="hidden lg:absolute lg:inset-0 lg:bg-black/80 lg:backdrop-blur-sm lg:opacity-0 lg:group-hover:opacity-100 lg:transition lg:duration-500 lg:px-6 lg:py-4 lg:overflow-y-auto lg:flex lg:flex-col lg:justify-center">
  <ul className="text-sm md:text-base text-gray-300 text-left list-disc list-inside space-y-1">
    {project.description.split("\n").map((line, i) => (
      <li key={i}>{line.replace(/^•\s*/, "")}</li>
    ))}
  </ul>
</div>

      </div>

      {/* Static Content */}
      <div className="bg-[#0a192f] p-5 md:p-6 h-[200px] flex flex-col justify-between border border-gray-700 rounded-md">
        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.name}
        </h4>
        <p className="text-sm md:text-base text-gray-300 mb-2">
          {project.shortDescription}
        </p>
        <ul className="flex flex-wrap gap-2 text-xs md:text-sm text-blue-300">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 mt-4">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="Live Project"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

const Work = ({ isNavOpen }) => {
  return (
    <section
      id="work"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-300 px-6 pt-20`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center md:max-w-[700px]  xl:max-w-[1200px]">
        <FadeIn>
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-600 mb-4">
              Work
            </h2>
            <p className="text-lg mt-4">Explore my recent projects</p>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                🖥️ Web Development Projects
              </h3>
            </FadeIn>
            {webProjects.map((project, index) => (
              <ProjectCard project={project} key={index} delay={index * 0.2} />
            ))}
          </div>

          <div className="flex flex-col gap-10">
            <FadeIn>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                📊 Data Analysis Projects
              </h3>
            </FadeIn>
            {dataProjects.map((project, index) => (
              <ProjectCard project={project} key={index} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
