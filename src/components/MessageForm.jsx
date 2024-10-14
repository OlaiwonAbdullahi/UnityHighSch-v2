import { VscSend } from "react-icons/vsc";
import contact from "../assets/contact.jpg";

const MessageForm = () => {
  return (
    <div>
      <div className="flex p-3 gap-4">
        <div className="relative basis-3/5">
          <div className="relative">
            <img src={contact} alt="" className="h-full w-full rounded-l-2xl" />

            <div className="absolute inset-0 rounded-l-2xl bg-black bg-opacity-70 flex items-center justify-center">
              <h2 className="text-white text-4xl font-semibold">
                Get in Touch
              </h2>
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold font-titalium text-center">
            Message Us
          </h2>
          <span className=" font-poppins text-center">
            Get in Touch with us✨
          </span>
          <form action="" className="w-full max-w-sm">
            <div className="my-4">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-secondary rounded p-2 w-full font-titalium placeholder:font-titalium bg-transparent focus:outline-none"
              />
            </div>

            <div className="my-4">
              <label htmlFor="Name"></label>
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="border border-secondary rounded p-2 w-full font-titalium placeholder:font-titalium bg-transparent focus:outline-none"
              />
            </div>

            <textarea
              name="Message"
              id=""
              placeholder="Your Message"
              className="border rounded border-secondary p-2 w-full h-32 font-titalium placeholder:font-titalium bg-transparent focus:outline-none"
            ></textarea>
            <button className=" rounded p-2 w-full justify-center gap-3 mt-2 text-center text-primary  font-titalium flex bg-secondary text-lg ">
              Send
              <VscSend className=" mt-1.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
