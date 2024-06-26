import Forest from "../assets/Work/forest.jpg";

function Work() {
  return (
    <div
      name="work"
      className=" pt-14 w-full min-h-screen    bg-[#0a192f] text-gray-300"
    >
      {/* container  */}
      <container className=" max-w-[1000px]  mx-auto pt-4 px-4 flex flex-col justify-center  gap-10 ">
        <div className="pb-">
          <p className="text-2xl font-bold inline border-b-4 text-grey-300 border-blue-600 ">
            Work
          </p>
          <p className="pt-4  ">Check out some of my recent work</p>
        </div>

        <section className="grid grid-row-1 gap-4 min-h-screen">
          <article
            className="  w-full h-full shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Forest})` }}
          >
            {/* Hover effects  */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 ">
              <span className="text-xl  font-bold text-gray-600 tracking-wider ">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article
            className="  w-full h-full shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Forest})` }}
          >
            {/* Hover effects  */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 ">
              <span className="text-xl  font-bold text-gray-600 tracking-wider ">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article
            className="  w-full h-full shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Forest})` }}
          >
            {/* Hover effects  */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 ">
              <span className="text-xl  font-bold text-gray-600 tracking-wider ">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article
            className="  w-full h-full shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Forest})` }}
          >
            {/* Hover effects  */}
            <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 ">
              <span className="text-xl  font-bold text-gray-600 tracking-wider ">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-base ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </article>
        </section>
      </container>
    </div>
  );
}

export default Work;
