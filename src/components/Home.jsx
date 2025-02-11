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
        I analyze and build thing for the web
        </h2>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-4">
        Web developer and data analyst, former athlete, and tech enthusiast driven by a 
        passion for creating innovative web solutions and analyzing data to drive insights. 
      
        </p>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-2" >
        Currently enrolled in a data analysis training program, I'm eager to expand my knowledge and skills in this field.
        </p>
        <p className="text-sm md:text-base xl:text-xl mb-1 text-text-primary py-4">
        My experience extends to freelance projects, where I've brought innovative solutions to life. 
        I am excited to leverage my expertise in both web development and data analysis for impactful roles in the industry.
        </p>
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
