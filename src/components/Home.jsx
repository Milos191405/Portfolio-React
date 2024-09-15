import { useNavigate } from "react-router";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/work");
  };

  return (
    <div
      name="home"
      className="w-full h-[100vh] bg-[#0a192f] border border-green-600   "
    >
      <div className="max-w-[1200px] h-[100%]   flex flex-col justify-center  text-white  border border-green-600">
        <p className="text-lg md:text-2xl text-blue-600 mb-4">Hi, my name is</p>
        <h1 className="text-2xl md:text-4xl mb-2 font-bold">
          Milos Mirkovic
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-500">
          I build things for the web
        </h2>
        <p className="text-sm md:text-xl mb-1 text-gray-500 py-4 max-w-[700px]">
          My focus is on frontend development, with expertise in HTML, CSS,
          JavaScript, and React. I also have a solid foundation in backend
          technologies like Node.js and Express.
        </p>
        <div>
          <button
            onClick={handleViewWork}
            className="btn group text-white border-2 px-6 py-2 rounded-md flex items-center sm:text-lg md:text-xl hover:bg-blue-600 active:border-blue-600"
          >
            View Work
            <span className="ml-3 transition-transform duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight size={24} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
