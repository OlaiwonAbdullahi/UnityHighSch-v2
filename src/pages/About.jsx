import AboutIntro from "../components/AboutIntro";
import M_VSection from "../components/M_VSection";
import Principals from "../components/Principals";

const About = () => {
  return (
    <div>
      <div>
      <AboutIntro />
    </div>
      <div className=" w-4/5 flex justify-center items-center mx-auto">
        <M_VSection />
      </div>
        <div>
        <Principals />
      </div>
    </div>
  );
};

export default About;
