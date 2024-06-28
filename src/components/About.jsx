const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen pt-20 bg-[#0a192f] text-gray-300 md:flex items-center "
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <header className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <h1
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-blue-600"
            >
              About
            </h1>
          </div>
        </header>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
          <div className="text-left text-xl sm:text-2xl md:text-3xl font-bold">
            <p>
              Hi. I`m Milos Mirkovic, nice to meet you. <br /> Please take a
              look around.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-xl ">
              I specialize in frontend technologies like HTML, CSS,
              JavaScript and React complemented by a strong backend foundation in
              frameworks such as Node.js and Express.I thrive on
              continuous learning, keeping pace with the dynamic landscape of
              web development to deliver impactful projects that meet modern
              digital demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
