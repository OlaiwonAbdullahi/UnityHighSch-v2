import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
const Navbar = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex justify-between p-1 bg-primary m-4 rounded-full border border-text h-full w-3/4">
        <div className=" flex gap-3 p-2">
          <img src={Ogun} alt="" className=" h-10 w-10 rounded-full" />
          <img src={Logo} alt="" className=" h-10 w-10" />
        </div>
        <div className="">
          <nav>
            <ul className=" flex gap-4 p-4 items-center text-base text-text font-titaliun">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className=" flex items-center font-titaliun">
          <button className=" flex gap-1 text-sm bg-secondary items-center p-1 rounded-full text-primary px-2">
            Portal <GoArrowUpRight className=" mt-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
