import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.png";
const Navbar = () => {
  return (
    <div>
      <div className="">
        <img src={Logo} alt="" />
        <img src={Ogun} alt="" />
      </div>
      <div className="">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="">
        <button className=" flex">
          Portal <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
