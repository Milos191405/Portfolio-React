// src/components/Home.js
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <div id="home" className="w-full h-[100vh] bg-bg-primary">
      <div className="md:max-w-[500px] xl:max-w-[1200px] pt-[130px] px-6 flex flex-col justify-center text-header">
        <p className="text-text-secondary mb-2 lg:text-center">
          Hi, my name is
        </p>
        <h1 className="text-3xl mb-2 font-bold">Milos Mirkovic</h1>
        <h2 className="text-2xl font-bold text-text-primary">
          I build things for the web
        </h2>
        <p className="text-sm md:text-base mb-1 text-text-primary py-4">
          My focus is on frontend development, with expertise in HTML, CSS,
          JavaScript, and React. I also have a solid foundation in backend
          technologies like Node.js and Express.
        </p>
        <div className="mt-4">
          <RouterLink
            to="/work"
            aria-label="View my work portfolio"
            className="custom-button text-text-secondary border-[1px] inline-flex items-center border-text-secondary text-sm px-2 py-2 rounded-md flex items-center z-10 mt-4"
          >
            View My Work
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
