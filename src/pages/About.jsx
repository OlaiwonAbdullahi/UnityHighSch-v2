import AboutIntro from "../components/AboutIntro";
import M_VSection from "../components/M_VSection";

const About = () => {
  return (
    <div>
      <AboutIntro />
      <div className=" w-4/5 flex justify-center items-center mx-auto">
        <M_VSection />
      </div>
    </div>
  );
};

export default About;
