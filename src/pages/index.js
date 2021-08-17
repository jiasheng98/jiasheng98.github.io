import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../components/MyLayout.js';

// Screens
import LandingSection from '../components/home/LandingSection';
import About from '../components/home/About';
import WorkSection from '../components/home/WorkSection';
import Contact from '../components/home/Contact';

const prefix = '/index';

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MyLayout
      title="Jia Sheng Yeap"
      keywords="UI Designer and Developer"
      description="UI Designer and Developer">
      <LandingSection />
      <About />
      <WorkSection />
      <Contact />
    </MyLayout>
  );
};

export default Home;
