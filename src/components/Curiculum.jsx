import { IoRocketOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { PiMathOperationsThin } from "react-icons/pi";

import { FaCodePullRequest } from "react-icons/fa6";

const edges = [
  {
    icon: <IoRocketOutline className="h-10 w-10" />,
    text: "Jet Club",
  },
  {
    icon: <CiMicrophoneOn className="h-10 w-10" />,
    text: "Press Club",
  },
  {
    icon: <FaCodePullRequest className="h-8 w-8" />,
    text: "Coding Club",
  },
  {
    icon: <PiMathOperationsThin className="h-10 w-10" />,
    text: "Mathematics Club",
  },
];

const Curiculum = () => {
  return (
    <div className="flex flex-col gap-3 my-6">
      <h2 className="text-2xl font-titalium font-bold text-center">
        Extra-Curricular <span className=" text-secondary"> Activities</span>
      </h2>
      <div className="flex justify-around flex-wrap font-poppins text-sm">
        {edges.map((edge, index) => (
          <div
            key={index}
            className=" text-secondary p-2 flex flex-col gap-2 items-center w-60 rounded-lg border border-primary transition duration-300 shadow-md"
            role="presentation"
            aria-label={edge.text}
          >
            {edge.icon}
            <span className="mt-1 text-center text-text">{edge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curiculum;
