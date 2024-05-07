

function About() {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-[#0a192f] text-gray-300   "
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
            <div className="sm:text-right pb-8 pl-4 ">
              <p className="text-4xl font-bold inline border-b-4 border-blue-600 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
              <p className="sm:text-right text-4xl font-bold">
                Hi, I'm Milos, nice to meet you. Please take a look around
              </p>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                unde corrupti cum quae eius, ab at ut ipsa cupiditate autem eos
                beatae, recusandae hic debitis culpa assumenda. Optio ab
                reiciendis animi, sequi tenetur ad totam sapiente earum, cum,
                autem nobis harum maiores quasi quam commodi ratione pariatur!
                Assumenda, enim vel?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About