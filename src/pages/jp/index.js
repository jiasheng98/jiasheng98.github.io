import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';

// Screens
import LandingSection from '../../components/home/LandingSection';
import About from '../../components/home/About';
import WorkSection from '../../components/home/WorkSection';
import Contact from '../../components/home/Contact';

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MyLayout
      title="Jia Sheng Yeap | シェーン"
      keywords="Creative Lead, UI Designer and Developer"
      description="Creative Lead, UI Designer and Developer"
      overlay
      jp
      >
      <LandingSection jp/>
      <About jp/>
      <WorkSection jp/>
      <Contact jp icons/>
    </MyLayout>
  );
};

export default Home;
