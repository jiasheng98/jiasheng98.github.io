import { useEffect } from "react";
import AOS from "aos";
import MyLayout from "../components/MyLayout.js";

// Screens
import LandingSection from "./home/LandingSection";
import About from "./home/About";
import WorkSection from "./home/WorkSection";
import Contact from "./home/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MyLayout
      title="Jia Sheng Yeap"
      keywords="UI Designer and Developer"
      // description="UI Designer and Developer"
    >
      <LandingSection />
      <About />
      <WorkSection />
      <Contact />
    </MyLayout>
  );
};

export default Home;
