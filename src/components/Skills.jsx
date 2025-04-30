import FadeIn from "../components/FadeIn";

const skillSections = [
  {
    title: "Frontend Development",
    skills: "HTML5 • CSS3 • JavaScript (ES6+) • React.js • Next.js • Tailwind CSS • Bootstrap",
  },
  {
    title: "Backend Development & Tools",
    skills: "Node.js • Express.js • MongoDB • Git • GitHub • GitFlow",
  },
  {
    title: "Data Analysis",
    skills: "Python • Pandas • NumPy • Matplotlib • Seaborn • SQL • PostgreSQL • Power BI",
  },
];

const Skills = ({ isNavOpen }) => {
  return (
    <section
      id="skills"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-300 flex items-center justify-center px-6`}
    >
      <div className="md:max-w-[700px] xl:max-w-[1200px] mx-auto flex flex-col justify-center w-full h-full space-y-10">
        
        {/* Header */}
        <FadeIn>
          <header>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold border-b-2 border-blue-600 inline-block">
              Skills
            </h2>
            <p className="py-4 md:text-lg xl:text-2xl text-gray-400">
              Technologies and tools I work with to build intuitive digital products and deliver actionable insights.
            </p>
          </header>
        </FadeIn>

        {/* Skill Sections */}
        {skillSections.map((section, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-400">
                {section.title}
              </h3>
              <p className="text-sm md:text-base xl:text-lg text-gray-200 leading-relaxed">
                {section.skills}
              </p>
            </div>
          </FadeIn>
        ))}

      </div>
    </section>
  );
};

export default Skills;
