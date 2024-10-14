import Hero from "../assets/hero.jpg";
import Hero1 from "../assets/studenttro.jpg";
import Hero2 from "../assets/computer.jpg";
const HeroImg = () => {
  return (
    <div className=" flex justify-center w-full pt-4 pb-14">
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <span>
          {" "}
          <img
            src={Hero}
            alt="Hero Image 2"
            className="md:w-64 md:h-64 w-32 h-36 rounded-xl"
          />
        </span>
        <span>
          {" "}
          <img
            src={Hero1}
            alt="Hero Image 3"
            className="md:w-64 md:h-64  w-32 h-36 rounded-full"
          />
        </span>
        <span>
          {" "}
          <img
            src={Hero2}
            alt="Hero Image 1"
            className="md:w-64 md:h-64  w-32 h-36 rounded-tl-[70px]"
          />
        </span>
        <span>
          {" "}
          <img
            src={Hero}
            alt="Hero Image 4"
            className="md:w-64 md:h-64  w-32 h-36 rounded-xl"
          />
        </span>
      </div>
    </div>
  );
};

export default HeroImg;
