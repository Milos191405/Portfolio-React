import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <div id="home" className="w-full h-[100vh] bg-bg-primary md:flex">
      <div className=" pt-[200px] px-6 flex flex-col justify-center text-header md:max-w-[700px]  xl:max-w-[1200px]   md:mx-auto">
        <p className="text-text-secondary mb-2 md:text-lg  lg:text-base xl:text-xl lg:text-left">
          Hi, my name is
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl mb-2 font-bold">
          Milos Mirkovic
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-text-primary">
        I build for the web and uncover insights through data
        </h2>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-4">
        I'm a web developer with 2+ years of experience, combining technical creativity with analytical thinking. A former athlete and lifelong tech enthusiast, 
        I’m passionate about building intuitive, responsive web solutions and using data to tell powerful stories.
      
        </p>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-2" >
        I recently completed a data analytics bootcamp, where I honed my skills in data wrangling, visualization, and insight-driven analysis.
        </p>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-4">
  I worked as a JavaScript Developer at Kontera Soft (remote, 2+ years), contributing to a range of projects—from lean tools to complex, data-driven platforms—
  with a focus on both front-end development and back-end data architecture.
</p>

{/* <p className="text-sm md:text-base xl:text-xl text-text-primary">
  Curious to see what I’ve been working on?
</p> */}

<div className="mt-4">
  <ScrollLink
    to="work"
    smooth={true}
    duration={800}
    aria-label="View my work portfolio"
    className="custom-button text-text-secondary cursor-pointer md:text-lg lg:text-base border-[1px] inline-flex border-text-secondary text-sm xl:text-lg px-2 py-2 rounded-md  items-center z-10 mt-4"
  >
    View My Work
  </ScrollLink>
</div>

      </div>
    </div>
  );
}

export default Home;
