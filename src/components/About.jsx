const About = ({ isNavOpen }) => {
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
              Hi! I'm Milos — a web developer and data analyst passionate about building intuitive digital solutions and translating data into clear, impactful insights.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
              With a background in sports, I bring a strong work ethic, focus, and adaptability to everything I do. My journey into web development began with curiosity and quickly became a career path that I'm fully committed to mastering.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
              After completing a full-year web development course, I gained hands-on experience using frontend tools like
              <span className="text-text-secondary"> HTML, CSS, JavaScript</span>, and <span className="text-text-secondary">React</span>,
              along with backend technologies such as <span className="text-text-secondary">Node.js</span> and <span className="text-text-secondary">Express</span>.
              My skill set expanded further through a completed <span className="text-text-secondary">Data Analytics Bootcamp</span>, where I worked on real-world projects using
              <span className="text-text-secondary"> Python</span>, <span className="text-text-secondary">PostgreSQL</span>, and libraries like <span className="text-text-secondary">Pandas, NumPy, Matplotlib</span>, and <span className="text-text-secondary">Seaborn</span>.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
              From January 2022 to October 2024, I worked remotely as a <span className="text-text-secondary">JavaScript Developer</span> at Kontera Soft. During this time, I bootstrapped new projects, maintained and optimized existing codebases, structured databases, organized datasets, and built data visualizations across a wide range of projects—from small tools to large-scale platforms.
            </p>
            <p className="text-left text-sm md:text-base xl:text-xl space-y-5 mb-1">
              I'm passionate about working at the intersection of web development and data, and I’m excited to bring value to teams that are driven by innovation and impact. Whether it’s designing a seamless frontend or uncovering stories within data, I strive to contribute meaningfully and continuously grow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
