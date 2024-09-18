import Forest from "../assets/Work/forest.jpg";
import "./styles.css";

import excelConverter from "../assets/Work/excel-converter.png";
import Portfolio from "../assets/Work/Portfolio version 1.png";
import CSS from '../assets/css.png'

function Work() {
  return (
    <div
      name="work"
      className=" pt-14 w-full min-h-screen    bg-[#0a192f] text-gray-300 lg:flex items-center  "
    >
      {/* container  */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20 sm:pt-20 md:px-auto md:py ">
        <div className="">
          <p className="text-2xl sm:text-3xl md:text-4xl  font-bold inline border-b-4 text-grey-300 border-blue-600  ">
            Work
          </p>
          <p className="sm:text-lg md:text-xl   pt-4 py-5">
            Check out some of my recent work
          </p>
        </div>

        <article
          id="work"
          className="relative grid grid-cols-12 grid-rows-2 gap-10  h-[500px] w-[1200px]"
        >
          {/* First div (Background Image) */}
          <div className="col-span-8 row-span-2  opacity-20 bg-[#39e5fc] hover:opacity-55 hover:bg- border border-red-600 ">
            <img src={CSS} alt="" className="h-full w-full " />
          </div>

          {/* Second div (Content) */}
          <div
            className="col-span-8 col-start-7 row-span-2 absolute flex justify-center h-[500px] items-center border border-red-600 rounded-md z-10"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <div className="flex flex-col items-center text-center text-white p-10">
              <h3 className="text-lg font-bold">My first Portfolio</h3>
              <p className="mt-2">
                Portfolio made only with HTML and CSS. My first project that I
                made.
              </p>
              <ul className="flex space-x-5 mt-4">
                <li className="text-sm">HTML</li>
                <li className="text-sm">CSS</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Work;
