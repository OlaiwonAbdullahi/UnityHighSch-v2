import { IoIosLogIn } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[url('./assets/herobg.svg')] bg-auto bg-no-repeat bg-center h-screen/2 md:pt-8 pt-1 pb-8">
      <div className="flex flex-col items-center text-center gap-5 md:pt-10 w-full">
        <h2 className="text-4xl md:text-5xl font-titalium font-semibold">
          We Provide <br />
          <span className="text-secondary">Unique Moral </span>
          <br />
          And Academic Excellence
        </h2>
        <p className="text-lg font-poppins w-4/5 md:w-2/3">
          At our school, we blend academic excellence with strong moral values,
          shaping students into compassionate, ethical leaders for the future.
        </p>
      </div>
      <div className="flex justify-center gap-6 pt-8 font-titalium">
        <button className="bg-transparent border border-secondary py-2 px-6 text-text rounded-full text-lg h-12 w-40 hover:bg-secondary hover:text-primary transition duration-300 ease-in-out">
          Learn More
        </button>
        <a href="https://ogsera.ogunstate.gov.ng/login">
          <button className=" flex  gap-2 items-center bg-secondary py-2 px-8 text-primary rounded-full text-lg h-12 w-40 hover:bg-primary hover:text-secondary hover:border hover:border-secondary transition duration-300 ease-in-out">
            Log In <IoIosLogIn className=" w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
