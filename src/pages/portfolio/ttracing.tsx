import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../components/ProjectDetail';
import ttracinguihome from '../../../public/images/ttracing_ui_home.png';

const TTRacing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'TTRacing',
    projectdescription:
      'TTRacing is a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
    projectdescription1: 'The Shopify website was designed using a sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: ttracinguihome,
    role: 'Creative Lead, UI/UX Designer, UI Developer',
    roledescription: 'Interaction, visual design, prototyping, wireframe, testing and copywriting',
    projectdate: 'January 2021 - March 2022',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'http://ttracing.my/',
    websitelabel: 'Landing Page',
  };

  return (
    <MyLayout title="TTRacing">
      <ProjectDetail item={portfolio} />
    </MyLayout>
  );
};

export default TTRacing;
