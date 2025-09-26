import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../components/ProjectDetail';
import steelcaseuihome from '../../../public/images/steelcase_ui_home.png';

const Steelcase = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Steelcase',
    projectdescription:
      'Steelcase is an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
    projectdescription1: 'The Shopify website was designed using a sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: steelcaseuihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription: 'Interaction, visual design, prototyping, wireframe, testing and copywriting',
    projectdate: 'March 2022 - Present',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'https://shop.steelcase.com/',
    websitelabel: 'Landing Page',
  };

  return (
    <MyLayout title="Steelcase">
      <ProjectDetail item={portfolio} />
    </MyLayout>
  );
};

export default Steelcase;
