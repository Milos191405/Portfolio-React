const About = ({isNavOpen}) => {
  return (
    <section
      id="about"
      className={`w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center ${
        isNavOpen ? "pt-[100px]" : "pt-0"
      }`}
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-full md:max-w-[700px]  xl:max-w-[1200px] md:mx-auto ">
        <header className="w-full px-6 lg:px-0 ">
          <h2
            id="about-heading"
            className="text-left text-xl md:text-2xl xl:text-3xl font-bold inline border-b-2 border-blue-600  "
          >
            About Me
          </h2>
        </header>
        <div className="max-w-[1000px] xl:max-w-[1200px] w-full grid grid-cols-1 gap-8 px-6 py-8 lg:px-0 ">
          <article className="text-left text-sm md:text-base xl:text-xl space-y-5">

            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 ">
            Hi! I'm Milos, and I have a passion for creating innovative web solutions and analyzing data to drive insights.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
            My journey into web development has been fueled by a long-standing interest, and now I’m fully dedicated to mastering the craft.
            Coming from a sports background, I’ve developed a strong work ethic, discipline, and valuable skills in both independent work and teamwork.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
            After completing an intensive one-year web development course, I gained hands-on experience with frontend technologies like 
            <span className="text-text-secondary"> HTML, CSS, JavaScript</span>, and <span className="text-text-secondary">React </span>, 
            as well as backend technologies like <span className="text-text-secondary">Node.js</span >  and <span className="text-text-secondary">Express</span>.
            Additionally, I have specialized in data analysis using <span className="text-text-secondary">Python</span> and <span className="text-text-secondary">PostgreSQL</span>, 
            having completed various projects involving <span className="text-text-secondary">SQL</span> and <span className="text-text-secondary">Python</span>.
            My data analysis skills include proficiency with libraries such as <span className="text-text-secondary"> Pandas, Matplotlib, Seaborn,</span> and  <span className="text-text-secondary">NumPy</span>.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
            Currently, I'm furthering my skills through a data analysis training program and am eager to expand my knowledge in this area.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
            Continuous professional development is a priority, with a keen interest in joining a team where I can contribute to its success while growing as a developer and data analyst. 
            I am passionate about working in both fields, web development and data analysis, and look forward to combining my skills to make a meaningful impact.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
