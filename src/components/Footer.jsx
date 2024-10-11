import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
import { LuArrowUpSquare } from "react-icons/lu";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" bg-yellow-100">
      <div className=" flex justify-between p-2">
        <div className=" flex gap-1 p-2">
          <img src={Ogun} alt="" className=" h-10 w-10  rounded-full" />
          <img src={Logo} alt="" className=" h-9 w-9" />
          <span className=" font-titalium font-semibold">
            Unity High School Ijoko Ota
          </span>
        </div>
        <div className=" flex gap-2 p-2 text-3xl text-secondary sticky bottom-0">
          <FaWhatsappSquare />
          <Link to="/">
            <LuArrowUpSquare />
          </Link>
        </div>
      </div>
      <div className=" flex  p-3 justify-around ">
        <div className="">
          <span className=" font-titalium font-semibold">Quick Links</span>
          <ul className=" text-sm font-poppins ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <a href="https://ogsera.ogunstate.gov.ng/login">
              <li>Portal</li>
            </a>
          </ul>
        </div>
        <div className="">
          <span className=" font-titalium font-semibold">Connect with us</span>
          <div className=" flex gap-2 font-poppins ">
            <CiMail className=" text-xl" />
            <a href="mailto:uhsijokoota@gmail.com">
              <span className="text-sm">uhsijokoota@gmail.com</span>
            </a>
          </div>

          <div className=" flex gap-2 font-poppins ">
            <BsTelephone className=" text-xl" />
            <a href=" telto:+234 806 596 5321">
              <span className="text-sm">+234 806 596 5321</span>
            </a>
          </div>

          <div className=" flex gap-2 font-poppins ">
            <MdWhatsapp className=" text-xl" />
            <span className="text-sm">+234 806 596 5321</span>
          </div>
        </div>
      </div>
      <hr className=" border-t border-t-secondary w-4/5 mx-auto" />
      <div className=" text-center font-titalium">
        <span>&copy; {new Date().getFullYear()} All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
