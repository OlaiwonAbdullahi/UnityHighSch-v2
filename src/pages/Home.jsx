import FAQAccordion from "../components/FAqs";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HeroImg from "../components/HeroImg";
import Honour from "../components/Honour";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroImg />
      <Feature />
      <Welcome />
      <Honour />
      <FAQAccordion />
    </div>
  );
};

export default Home;
