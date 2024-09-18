const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen pt-[80px] bg-[#0a192f] text-gray-300 md:flex items-center "
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <header className=" max-w-[1000px] w-full">
          <div className="text-left pb-8 mx-6">
            <h2 id="after" className=" text-xl  font-bold z-10">
              About
            </h2>
          </div>
        </header>
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 px-6">
          <div className="text-left text-sm text-text-primary">
            <p className=" pb-5">
              Hi! I'm Milos, and I enjoy creating innovative solutions for the
              web. My interest in web development has been long-standing, but I
              haven’t had the opportunity to fully dedicate myself to it until
              now.
            </p>
            <p className=" pb-5">
              My background in sports has taught me valuable skills in both
              independent work and teamwork, fostering a strong work ethic and
              discipline. I’m currently completing a one-year intensive web
              development course, where I’ve gained hands-on experience with
              frontend technologies such as{" "}
              <span className="text-text-secondary">HTML</span>,
              <span className="text-text-secondary"> CSS</span>,
              <span className="text-text-secondary"> JavaScript</span>, and
              <span className="text-text-secondary"> React</span> as well as
              backend technologies including{" "}
              <span className="text-text-secondary">Node.js</span> and 
              <span className="text-text-secondary"> Express</span>.
            </p>
            <p className=" pb-5 ">
              Looking ahead,I am eager to continue advancing in my career as a
              web developer. I am committed to learning and mastering new
              technologies, staying up-to-date with industry trends, and
              applying my skills to build impactful and innovative web
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
