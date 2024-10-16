import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" md:flex justify-center  top-0 sticky hidden z-30 ">
      <div className="flex justify-between  bg-yellow-50 m-4 rounded-full border border-text h-full w-3/4">
        <div className="flex gap-3 p-2">
          <img
            src={Ogun}
            alt="Ogun State Logo"
            className="h-10 w-10 rounded-full"
          />
          <img src={Logo} alt="School Logo" className="h-10 w-10" />
        </div>

        <nav>
          <ul className="flex gap-4 p-4 items-center text-base text-text font-titalium font-semibold">
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

        <div className="flex items-center font-titaliun">
          <a href="https://ogsera.ogunstate.gov.ng/login">
            <button className="flex gap-1 text-sm bg-secondary items-center p-1 rounded-full text-primary px-2 mr-2">
              Portal <GoArrowUpRight className="mt-1 h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
