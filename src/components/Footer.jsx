import Logo from "../assets/Logo.png";
import Ogun from "../assets/ogun.jpg";
import { LuArrowUpSquare } from "react-icons/lu";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-yellow-100/35">
      <div className="flex justify-between p-2">
        <div className="flex gap-1 p-2">
          <img src={Ogun} alt="" className="h-10 w-10 rounded-full" />
          <img src={Logo} alt="" className="h-9 w-9" />
          <span className="font-titalium font-semibold">
            Unity High School Ijoko Ota
          </span>
        </div>
      </div>
      <div className="flex p-3 justify-around">
        <div>
          <span className="font-titalium font-semibold">Quick Links</span>
          <ul className="text-sm font-poppins">
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
        <div>
          <span className="font-titalium font-semibold">Connect with us</span>
          <div className="flex gap-2 font-poppins">
            <CiMail className="text-xl" />
            <a href="mailto:uhsijokoota@gmail.com">
              <span className="text-sm">uhsijokoota@gmail.com</span>
            </a>
          </div>

          <div className="flex gap-2 font-poppins">
            <BsTelephone className="text-xl" />
            <a href="tel:+2348065965321">
              <span className="text-sm">+234 806 596 5321</span>
            </a>
          </div>

          <div className="flex gap-2 font-poppins">
            <MdWhatsapp className="text-xl" />
            <span className="text-sm">+234 806 596 5321</span>
          </div>
        </div>
      </div>
      <hr className="border-t border-t-secondary w-4/5 mx-auto" />
      <div className="text-center font-titalium">
        <span>&copy; {new Date().getFullYear()} All Right Reserved</span>
      </div>
      <br />
      <br />
      <div className="fixed bottom-4 right-4  flex  gap-2">
        <a
          href="https://wa.link/hgg7t2"
          className="text-3xl text-secondary hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsappSquare />
        </a>
        <button
          className="text-3xl text-secondary hover:scale-110 transition-transform duration-300"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <LuArrowUpSquare />
        </button>
      </div>
    </div>
  );
};

export default Footer;
