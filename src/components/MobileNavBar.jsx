import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
import { Link } from "react-router-dom";
import { BsFilterRight } from "react-icons/bs";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const MobileNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex flex-col justify-center items-center sticky top-0 z-50 md:hidden mx-2">
      <div className="flex justify-between bg-yellow-50 m-4 rounded-full border border-text h-12 w-full shadow-md">
        <div className="flex gap-3 p-2">
          <img
            src={Ogun}
            alt="Ogun State Logo"
            className="h-8 w-8 rounded-full"
          />
          <img src={Logo} alt="School Logo" className="h-8 w-8" />
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex p-1 items-center mr-5 transition-transform duration-200 ease-in-out"
          aria-label="Toggle menu"
        >
          {openMenu ? (
            <LiaTimesSolid className="h-6 w-6 text-secondary transform transition duration-200 ease-in-out hover:scale-110" />
          ) : (
            <BsFilterRight className="h-6 w-6 text-secondary transform transition duration-200 ease-in-out hover:scale-110" />
          )}
        </button>
      </div>

      {openMenu && <Content />}
    </header>
  );
};

export default MobileNavBar;

function Content() {
  return (
    <div className="w-3/4 bg-yellow-50 rounded-lg shadow-md p-3">
      <nav>
        <ul className="flex flex-col gap-4 p-4 items-center text-base text-text font-titalium font-semibold">
          <Link to="/" className="hover:text-secondary">
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:text-secondary">
            <li>About</li>
          </Link>
          <Link to="/contact" className="hover:text-secondary">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <div className="flex items-center justify-center font-titalium">
        <button className="flex gap-1 text-sm bg-secondary items-center p-2 rounded-full text-primary mr-2">
          Portal <GoArrowUpRight className="h-5 w-5 mt-1" />
        </button>
      </div>
    </div>
  );
}
