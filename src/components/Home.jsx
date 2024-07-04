import { useNavigate } from "react-router";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {

  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/work");
  };

  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f]  ">
      <div className="max-w-[1200px]  mx-auto px-8 pt-12 flex flex-col  justify-center min-h-screen text-white md:pt-0 ">
        <p className="text-xl md:text-2xl   text-blue-600 mb-4">Hi, my name is </p>
        <h1 className="xs:text-2xl sm:text-3xl md:text-4xl mb-2  font-bold">
          Milos Mirkovic
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold text-gray-500">
          I`m a Full Stack Developer
        </h2>
        <p className="xs:text-base sm:text-lg md:text-xl  mb-1 text-gray-500 py-4 max-w-[700px]">
          I specialize in frontend technologies like HTML, CSS, JavaScript and React
          complemented by a strong backend foundation in frameworks such as
          Node.js and Express. 
        </p>
        <div>
          <button
            onClick={handleViewWork}
            className="btn group text-white border-2 px-6 py-2 rounded-md flex items-center sm:text-lg md:text-xl   hover:bg-blue-600 active:border-blue-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
