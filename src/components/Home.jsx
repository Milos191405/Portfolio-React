import { FaCheckCircle } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import FadeIn from "./FadeIn.jsx";

function Home({ isNavOpen }) {
  return (
    <section
      id="home"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px) pt-40]" : "min-h-screen"
      } bg-bg-primary flex items-center justify-center pt-10 px-4 pb-4  md:px-8`}
      aria-labelledby="home-heading"
    >
      <div className="w-full pt-[80px] md:max-w-[700px] xl:max-w-[1200px] flex flex-col justify-center items-start text-header">

        {/* Intro Text */}
        <FadeIn>
          <p className="text-text-secondary mb-2 text-base sm:text-lg xl:text-xl">
            Hi, my name is
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            id="home-heading"
            className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-2"
          >
            Milos Mirkovic
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-text-primary mb-2">
            I build for the web and uncover insights through data
          </h2>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-sm sm:text-base text-text-secondary mt-1">
            🎾 Ex-athlete | 💡 Problem-solver | 🧠 Data-driven
          </p>
        </FadeIn>

        {/* Intro Paragraph */}
        <div className="space-y-4 py-6">
          <FadeIn delay={0.6}>
            <p className="text-sm sm:text-base xl:text-xl text-text-primary">
              I'm a web developer with 2+ years of experience, combining technical creativity with analytical thinking. A former athlete and lifelong tech enthusiast, I’m passionate about building intuitive, responsive web solutions and using data to tell powerful stories.
            </p>
          </FadeIn>
        </div>

        {/* Tags */}
        <FadeIn delay={1}>
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-text-secondary">
            {["React", "Next.js", "Tailwind CSS", "Node.js", "Power BI", "Python", "SQL"].map((tag, idx) => (
              <span key={idx} className="bg-gray-800 px-2 py-1 rounded text-xs sm:text-sm">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Prompt */}
        <FadeIn delay={1.2}>
          <p className="text-sm sm:text-base text-text-secondary italic mt-6">
            Curious to see what I’ve been working on?
          </p>
        </FadeIn>

        {/* Highlights */}
        <div className="space-y-6 py-6 text-text-primary max-w-4xl">
          {[
            {
              title: "Data Analytics Bootcamp",
              description:
                "Completed hands-on training in Python, SQL, Power BI, Pandas, Seaborn, and exploratory data analysis.",
            },
            {
              title: "JavaScript Developer at Kontera Soft",
              description:
                "Worked remotely for 2+ years on frontend and backend integration — building tools and data-driven platforms using React, Node.js, and APIs.",
            },
            {
              title: "Tech Meets Insight",
              description:
                "Combining frontend skills with data storytelling to build responsive, user-focused applications that deliver actionable insights.",
            },
          ].map(({ title, description }, index) => (
            <FadeIn key={index} delay={1.4 + index * 0.2}>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1 min-w-[20px]" />
                <div>
                  <p className="font-semibold text-sm sm:text-base xl:text-lg">{title}</p>
                  <p className="text-sm sm:text-base xl:text-base text-text-secondary">
                    {description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={2.2}>
          <div className="mt-4">
            <ScrollLink
              to="work"
              smooth={true}
              duration={800}
              aria-label="View my work portfolio"
              className="custom-button text-text-secondary cursor-pointer text-sm sm:text-base xl:text-lg border border-text-secondary px-4 py-2 rounded-md inline-flex items-center hover:bg-blue-500 hover:text-white transition"
            >
              View My Work
            </ScrollLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Home;
