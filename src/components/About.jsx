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
            <p>
              Hi! I`m Milos, and I enjoy creating innovative solutions for the
              web. My interest in web development has been long-standing, but I
              haven`t had the opportunity to fully dedicate myself to it until
              now.
            </p>
            <p>
              My background in sports has taught me valuable skills in both
              independent work and teamwork, fostering a strong work ethic and
              discipline. I finished a one-year intensive web
              development course, where I’ve gained hands-on experience with
              frontend technologies such as{" "}
              <span className="text-text-secondary">HTML</span>,{" "}
              <span className="text-text-secondary">CSS</span>,{" "}
              <span className="text-text-secondary">JavaScript</span>, and{" "}
              <span className="text-text-secondary">React</span> as well as
              backend technologies including{" "}
              <span className="text-text-secondary">Node.js</span> and{" "}
              <span className="text-text-secondary">Express</span>.
            </p>
            
            <p>I`m continuously working on my professional development and look forward to joining a team where 
              I can contribute to the company`s success and grow as a developer.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
