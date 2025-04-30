import FadeIn from "./FadeIn.jsx";

const About = ({ isNavOpen }) => {
  return (
    <section
    id="about"
    className={`w-full ${
      isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
    } bg-[#0a192f] text-gray-300 flex items-center justify-center`}
    aria-labelledby="about-heading"
  >
       <div className="flex flex-col justify-center items-center w-full h-screen   md:max-w-[700px] xl:max-w-[1200px] md:mx-auto px-6 ">



        {/* Section Heading */}
        <header className="w-full mb-4 lg:mb-6">
          <FadeIn>
            <h2
              id="about-heading"
              className="text-left text-xl md:text-2xl xl:text-3xl font-bold inline border-b-2 border-blue-600"
            >
              About Me
            </h2>
          </FadeIn>
        </header>

        {/* About Content */}
        <div className="max-w-[1000px] xl:max-w-[1200px] w-full grid grid-cols-1 gap-8">
          {[
            "At Kontera Soft, I spent over two years working remotely across diverse web and data-driven projects. I contributed to full application lifecycles—from UI design to backend structure—collaborating with cross-functional teams and stakeholders in a remote setting.",
            "I'm especially interested in the crossover between data and design: using insights to improve usability, and using clean UI to make complex data approachable. I believe code should not only work well, but communicate clearly — both to users and to teammates.",
            "While I work comfortably with modern frontend frameworks and backend integration, I'm also passionate about data visualization and automation — helping teams make better decisions faster.",
            "I hold certifications in Full Stack Web Development and Data Analytics, and I’m continuously learning — through courses, real-world projects, and community engagement.",
            "Outside of coding, I value discipline, consistency, and purpose — qualities shaped by my background in professional sports, and essential for delivering thoughtful, long-term software solutions."
          ].map((text, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <p className="text-left text-sm md:text-base xl:text-xl mb-1 text-text-primary">
                {text}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
