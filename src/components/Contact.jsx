/* eslint-disable react/jsx-no-comment-textnodes */

function Contact() {
  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-16 border   "
    >
      <div className=" flex flex-col items-center justify-center h-screen w-full  ">
        <p className="text-sm text-center text-blue-600 mb-1">What's next?</p>
        <p className="text-xl text-center  text-gray-300 mb-3">Contact</p>
        <p className="text-gray-500">
          Although I’m still in the early stages of my programming journey, I’m
          eager to learn, grow, and make new connections. Feel free to reach out
          if you have advice or opportunities for collaboration! I’d love to
          connect, exchange ideas, and expand my network.
        </p>
        <div className="border  border-blue-600 mt-5 ">
          <button className="text-blue-600   p-2 ">Let's talk</button>
        </div>
      </div>
      {/* <form
        method="POST"
        action="https://getform.io/f/paygnxka"
        className="flex flex-col max-w-[1000px] w-full "
      >
        <div className="pb-2 text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
            Contact
          </p>
          <p className=" text-gray-300 sm:text-lg md:text-xl py-4">
            Submit the form below or shoot me an email -
            milos.mirkovic7@gmail.com
          </p>
        </div>
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            className="bg-[#ccd6f6] p-1 w-full"
            type="text"
            placeholder="Name"
            name="name"
            aria-label="Name"
            required
          />
        </label>
        <label className="block my-4">
          <span className="sr-only" >Email</span>
          <input
            className="bg-[#ccd6f6] p-1 w-full"
            type="email"
            placeholder="Email"
            name="email"
            aria-label="Email"
            required
          />
        </label>
        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            className="bg-[#ccd6f6] p-1 w-full"
            name="message"
            cols="20"
            rows="10"
            placeholder="Message"
            aria-label="Message"
            required
          ></textarea>
        </label>
        <button className="sm:text-lg md:text-xl text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-4 mx-auto flex items-center">
          Let`s Collaborate
        </button>
      </form> */}
    </section>
  );
}

export default Contact;
