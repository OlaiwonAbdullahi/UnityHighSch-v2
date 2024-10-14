import borg from "../assets/borg.svg";
import eye from "../assets/eye.svg";

const M_VSection = () => {
  return (
    <div>
      <div className="flex p-7 justify-center gap-7 flex-col md:flex-row">
        <div className=" text-center bg-primary p-8 basis-1/2 md:w-1/3 w-full flex flex-col gap-3 rounded-md shadow-md">
          <div className=" flex justify-center">
            <img src={borg} alt="" />
          </div>
          <h3 className="text-2xl font-titalium font-semibold  text-center">
            Our Mission
          </h3>
          <p className=" font-poppins">
            To educate all students to the highest levels of academic
            achievement, to enable them to reach and expand their potential, and
            to prepare them to become productive, responsible, ethical, creative
            and compassionate members of society.{" "}
          </p>
        </div>
        <div className="md:w-1/3 w-full text-center bg-primary  p-8 basis-1/2 flex flex-col gap-3 rounded-md shadow-md">
          <div className=" flex justify-center">
            <img src={eye} alt="" />
          </div>
          <h3 className="font-titalium text-2xl font-semibold  text-center ">
            Our vision
          </h3>
          <p className=" font-poppins">
            Empowering students to reach their full potential through innovative
            education, fostering creativity, and nurturing a culture of lifelong
            learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default M_VSection;
