import Forest from '../assets/Work/forest.jpg'


function Work() {
  return (
    <div
      name="work"
      className=" w-full xsm:h-screen sm:h-screen md:h-screen  bg-[#0a192f] text-gray-300"
    >
      {/* container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-10 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-grey-300 border-blue-600 ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <section className='gap-5 md:flex md:gap-5 w-full '>
          <div style={{ backgroundImage: `url(${Forest})` }} className="md:w-1/2 ">
            <div className=" w-full shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto  content-div ">
              {/* Hover effects  */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-gray-600 tracking-wider ">
                  React Portfolio
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg ">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Forest})` }} className="md:w-1/2">
            <div className="shadow-lg shadow-color-[#040c16] group round-md flex justify-center items-center mx-auto  content-div ">
              {/* Hover effects  */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold text-gray-600 tracking-wider ">
                  React Portfolio
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg ">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default Work;
