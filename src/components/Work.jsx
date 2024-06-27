import Forest from "../assets/Work/forest.jpg";
import "./work.css";

function Work() {
  return (
    <div
      name="work"
      className=" pt-14 w-full min-h-screen    bg-[#0a192f] text-gray-300 lg:flex items-center  "
    >
      {/* container  */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20 sm:pt-20 md:px-auto md:py ">
        <div className="">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 text-grey-300 border-blue-600 ">
            Work
          </p>
          <p className="sm:text-lg md:text-xl lg:text-2xl  pt-4  ">
            Check out some of my recent work
          </p>
        </div>

        <section className="grid sm:grid-cols-1 md:grid-cols lg:grid-cols-2 gap-4">
          {/* First project  */}
          <article className="" style={{ backgroundImage: `url(${Forest})` }}>
            <div
              style={{ backgroundImage: `url(${Forest})` }}
              className="w-full h-full shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div  "
            >
              {/* Hover effects  */}
              <div className="w-full flex flex-col items-center opacity-0 group-hover:opacity-100">
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
            </div>
          </article>

          {/* Second project  */}
          <article className="" style={{ backgroundImage: `url(${Forest})` }}>
            <div
              style={{ backgroundImage: `url(${Forest})` }}
              className="w-full h-full shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div  "
            >
              {/* Hover effects  */}
              <div className="w-full flex flex-col items-center opacity-0 group-hover:opacity-100">
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
            </div>
          </article>

          {/* Third project  */}
          <article className="" style={{ backgroundImage: `url(${Forest})` }}>
            <div
              style={{ backgroundImage: `url(${Forest})` }}
              className="w-full h-full shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div  "
            >
              {/* Hover effects  */}
              <div className="w-full flex flex-col items-center opacity-0 group-hover:opacity-100">
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
            </div>
          </article>

          {/* Fourth project  */}
          <article className="" style={{ backgroundImage: `url(${Forest})` }}>
            <div
              style={{ backgroundImage: `url(${Forest})` }}
              className="w-full h-full shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div  "
            >
              {/* Hover effects  */}
              <div className="w-full flex flex-col items-center opacity-0 group-hover:opacity-100">
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
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Work;
