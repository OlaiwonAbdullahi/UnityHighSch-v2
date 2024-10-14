import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";

const ContactMap = () => {
  return (
    <div className=" flex bg-white p-3 m-4 shadow-md rounded-md flex-col md:flex-row gap-5 md:gap-0">
      <div className=" basis-1/3 h-full flex flex-col items-center justify-center my-auto">
        <div className="p-2">
          <span className="font-titalium font-semibold text-2xl">
            Connect with us
          </span>
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

      <div className="basis-1/3 w-full justify-center flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.0518779233857!2d3.2492025914578173!3d6.757200662535478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103ba365fa9eb34f%3A0x14f9261074e954da!2sUnity%20High%20School!5e0!3m2!1sen!2sng!4v1699518560360!5m2!1sen!2sng"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="md:w-[800px] w-[420px] rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
