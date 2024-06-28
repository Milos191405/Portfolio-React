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
              Hi. I`m Milos Mirkovic, nice to meet you. <br /> Please take a look
              around.
            </p>
            
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit dolor, possimus modi earum rerum dignissimos sunt.
              Ratione doloremque, maxime rem aliquam, soluta fugit velit,
              possimus esse ex laborum itaque voluptatibus.
              {/* Replace this text with your actual content */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
