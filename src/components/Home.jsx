import { useNavigate } from "react-router";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {

  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/work");
  };

  return (
    <div name="home" className="w-full min-h-screen bg-[#0a192f] ">
      <div className="max-w-[1000px]  mx-auto px-8 pt-12 flex flex-col justify-center min-h-screen text-white md:pt-0">
        <p className="text-lg text-blue-600">Hi, my name is </p>
        <h1 className="xs:text-2xl sm:text-3xl font-bold">Milos Mirkovic</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-500">
          I`m a Full Stack Developer
        </h2>
        <p className="xs:text-base sm:text-lg mb-1 text-gray-500 py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          placeat accusamus quo est enim cupiditate maxime neque at eligendi
          consequatur.
        </p>
        <div>
          <button
          onClick={handleViewWork}
            className="btn group text-white border-2 px-6 py-2 flex items-center hover:bg-blue-600 active:border-blue-600">
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
