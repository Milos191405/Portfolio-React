import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate("/"); // Adjust the path as needed
  };

  return (
    <div name="home" className="w-full h-[100vh] bg-bg-primary ">
      <div className=" md:max-w-[500px] xl:max-w-[1200px]  h-[100%] px-6   flex flex-col justify-center   text-header">
        <p className="  text-text-secondary mb-2 lg:text-center">
          Hi, my name is
        </p>
        <h1 className="text-3xl  mb-2 font-bold">Milos Mirkovic</h1>
        <h2 className="text-2xl  font-bold text-text-primary">
          I build things for the web
        </h2>
        <p className="text-sm md:text-base  mb-1 text-text-primary py-4">
          My focus is on frontend development, with expertise in HTML, CSS,
          JavaScript, and React. I also have a solid foundation in backend
          technologies like Node.js and Express.
        </p>
        <div className="mt-4 lg:mx-auto">
          {/* Original Button (uncommented) */}
          <button
            id="button"
            onClick={handleViewWork}
            className="custom-button text-text-secondary border-[1px] border-text-secondary px-4 py-2 rounded-md flex items-center z-10 mt-4"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
