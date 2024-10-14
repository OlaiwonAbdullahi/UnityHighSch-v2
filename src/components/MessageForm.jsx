import contact from "../assets/contact.jpg";

const MessageForm = () => {
  return (
    <div>
      <div className="flex p-3 gap-4">
        <div className="relative basis-3/5">
          <div className="relative">
            <img src={contact} alt="" className="h-full w-full" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-4xl font-semibold">
                Get in Touch
              </h2>
            </div>
          </div>
        </div>
        <div className="basis-2/5">
          <h2 className="text-3xl font-semibold font-titalium text-center">
            Message Us
          </h2>
          <span className=" font-poppins">Get in Touch with us✨</span>
          <form action="">
            <div className="my-4">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="my-4">
              <label htmlFor="Name"></label>
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <textarea
              name="Message"
              id=""
              placeholder="Your Message"
              className="border border-gray-300 rounded p-2 w-full h-32"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
