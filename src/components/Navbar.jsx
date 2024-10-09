import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
const Navbar = () => {
  return (
    <div className=" flex justify-between p-4">
      <div className=" flex gap-3 p-2">
        <img src={Ogun} alt="" className=" h-10 w-10" />
        <img src={Logo} alt="" className=" h-10 w-10" />
      </div>
      <div className="">
        <nav>
          <ul className=" flex gap-4 p-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="">
        <button className=" flex gap-2">
          Portal <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
