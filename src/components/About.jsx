const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen pt-20 bg-[#0a192f] text-gray-300 md:flex items-center "
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-full border">
        <header className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-left pb-8 pl-4">
            <h2
              id="after"
              className=" relative text-2xl md:text-4xl font-bold "
            >
              About
            </h2>
          </div>
        </header>
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 px-4">
          <div className="text-left text-sm">
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
              frontend technologies such as HTML, CSS, JavaScript, and React, as
              well as backend technologies including Node.js and Express.
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
