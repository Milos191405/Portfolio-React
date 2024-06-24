/* eslint-disable react/jsx-no-comment-textnodes */


function Contact() {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/paygnxka"
        className="flex flex-col max-w-[1000px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300 text-center">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form bellow or shoot me an email -
            milos.mirkovic7@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" bg-[#ccd6f6] p-2"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact