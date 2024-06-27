import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen pt- bg-[#0a192f] text-gray-300 md:flex items-center justify-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20 sm:pt-20 md:px-auto md:py">
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-2">
            These are the technologies I`ve worked with
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4  ">
            <div className="  shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24  mx-auto"
                src={HTML}
                alt="HTML icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={CSS}
                alt="CSS icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={JavaScript}
                alt="JavaScript icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">
                JAVASCRIPT
              </p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={ReactImg}
                alt="React icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={GitHub}
                alt="GitHub icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={Node}
                alt="Node icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">NODE</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-12 sm:w-16 md:w-20 lg:w-24 mx-auto"
                src={MongoDB}
                alt="MongoDB icon"
              />
              <p className="sm:text-lg md:text-xl lg:text-2xl my-4">MONGODB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
