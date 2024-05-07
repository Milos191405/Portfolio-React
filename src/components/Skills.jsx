import HTML from '../assets/html.png'
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import React from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className="py-4">These are technologies that I worked with </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={JavaScript} alt="JavaScript icon" className="w-20 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={React} alt="React icon" className="w-20 mx-auto" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={GitHub} alt="Github icon" className="w-20 mx-auto" />
            <p>Git Hub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills