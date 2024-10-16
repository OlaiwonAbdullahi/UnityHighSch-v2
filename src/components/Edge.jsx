import { MdOutlineSchool } from "react-icons/md";
import { FaPersonPraying } from "react-icons/fa6";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const edges = [
  {
    icon: <MdOutlineSchool className="h-10 w-10" />,
    text: "Conducive learning environment",
  },
  {
    icon: <FaPersonPraying className="h-10 w-10" />,
    text: "High moral standard",
  },
  {
    icon: <PiChalkboardTeacherThin className="h-10 w-10" />,
    text: "Well trained seasoned & experienced teachers",
  },
  {
    icon: <HiOutlineComputerDesktop className="h-10 w-10" />,
    text: "Computer education & Internet facilities.",
  },
];

const Edge = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-titalium font-bold text-center">Our Edge</h2>
      <div className="flex justify-around flex-wrap font-poppins text-sm">
        {edges.map((edge, index) => (
          <div
            key={index}
            className="p-2 flex flex-col items-center w-60 rounded-lg border border-primary transition duration-300 shadow-md"
            role="presentation"
            aria-label={edge.text}
          >
            {edge.icon}
            <span className="mt-1 text-center">{edge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edge;
