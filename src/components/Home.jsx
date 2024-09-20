import { useNavigate } from "react-router";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/");
  };

  return (
    <div name="home" className="w-full h-[100vh] bg-bg-primary">
      <div className="max-w-[1200px] h-[100%] px-6  flex flex-col justify-center text-center text-header border border-red-600 xl:mx-auto ">
        <p className="text-lg md:text-2xl text-text-secondary mb-2 lg:text-center">
          Hi, my name is
        </p>
        <h1 className="text-2xl md:text-4xl mb-2 font-bold">Milos Mirkovic</h1>
        <h2 className="text-xl  font-bold text-text-primary">
          I build things for the web
        </h2>
        <p className="text-sm md:text-xl mb-1 text-text-primary py-4">
          My focus is on frontend development, with expertise in HTML, CSS,
          JavaScript, and React. I also have a solid foundation in backend
          technologies like Node.js and Express.
        </p>
        <div className="mt-4 lg:mx-auto"> 
          <button
            id="button"
            onClick={handleViewWork}
            className="text-text-secondary border-[1px] border-text-secondary px-4 py-2 rounded-md flex items-center z-10"
          >
            View My Work
            {/* <span className="ml-3 transition-transform duration-300 group-hover:rotate-90">
    <HiArrowNarrowRight size={24} />
  </span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
