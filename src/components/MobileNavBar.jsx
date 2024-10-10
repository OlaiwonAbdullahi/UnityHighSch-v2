import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
import { Link } from "react-router-dom";
import { BsFilterRight } from "react-icons/bs";

const MobileNavBar = () => {
  return (
    <header className="flex flex-col justify-center items-center  top-0 sticky">
      <div className="flex justify-between  bg-yellow-50 m-4 rounded-full border border-text h-full w-3/4">
        <div className="flex gap-3 p-2">
          <img
            src={Ogun}
            alt="Ogun State Logo"
            className="h-10 w-10 rounded-full"
          />
          <img src={Logo} alt="School Logo" className="h-10 w-10" />
        </div>
        <div className=" flex p-1 items-center mr-5">
          <BsFilterRight className=" h-6 w-6 text-secondary" />
        </div>
      </div>
      <Content />
    </header>
  );
};

export default MobileNavBar;

function Content() {
  return (
    <div className="">
      <nav>
        <ul className="flex flex-col gap-4 p-4 items-center text-base text-text font-titalium font-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <div className="flex items-center justify-center font-titaliun">
        <button className="flex gap-1 text-sm bg-secondary items-center p-1 rounded-full text-primary px-2 mr-2">
          Portal <GoArrowUpRight className="mt-1 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
