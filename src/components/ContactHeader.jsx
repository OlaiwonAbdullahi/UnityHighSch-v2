import { BiHome } from "react-icons/bi";

const ContactHeader = () => {
  return (
    <div className=" font-titalium">
      <div className="bg-[url('./assets/aboutbg.png')] h-60 text-white uppercase text-xs ">
        <p className=" py-20 px-10  capitalize">
          <BiHome color="white" className="text-base inline " />
          Home / Contact Us
          <br />
          <br />
          <br />
          <span className="text-xl uppercase">CONTACT US</span>
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
