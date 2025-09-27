import MyLayout from '../../components/MyLayout';
import LandingSection from '../../components/home/LandingSection';
import About from '../../components/home/About';
import WorkSection from '../../components/home/WorkSection';
import Contact from '../../components/home/Contact';

const Home = () => {
  return (
    <MyLayout
      title="Jia Sheng Yeap | シェーン"
      keywords="クリエイティブリード, UIデザイナー, UIデベロッパー"
      description="クリエイティブリード, UIデザイナー, UIデベロッパー"
      overlay
      jp
    >
      <LandingSection jp />
      <WorkSection jp />
      <Contact jp icons />
    </MyLayout>
  );
};

export default Home;
