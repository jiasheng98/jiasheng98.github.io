import MyLayout from '../components/MyLayout';
import LandingSection from '../components/home/LandingSection';
import WorkSection from '../components/home/WorkSection';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <MyLayout
      title="Jia Sheng Yeap | シェーン"
      keywords="Creative Lead, UI Designer and Developer"
      description="Creative Lead, UI Designer and Developer"
      overlay
    >
      <LandingSection />
      <WorkSection />
      <Contact icons />
    </MyLayout>
  );
};

export default Home;
