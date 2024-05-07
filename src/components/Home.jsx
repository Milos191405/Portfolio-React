import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <>
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full text-white">
          <p className="  text-blue-600">Hi, my name is </p>
          <h1 className=" text-4xl sm:text-7xl font-bold ">Milos Mirkovic</h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-gray-500">
            I'm a Full Stack Developer{" "}
          </h2>
          <p className="text-gray-500 py-4 max-w-[700px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            placeat accusamus quo est enim cupiditate maxime neque at eligendi
            consequatur.
          </p>
          <div>
            <button className="btn group text-white border-2 px-6 py-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="m-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
