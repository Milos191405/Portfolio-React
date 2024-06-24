const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <header className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1
              id="about-heading"
              className="text-4xl font-bold inline border-b-4 border-blue-600"
            >
              About
            </h1>
          </div>
        </header>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Milos Mirkovic, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
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
