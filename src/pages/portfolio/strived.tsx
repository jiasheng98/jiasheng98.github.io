import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../components/ProjectDetail';
import striveduihome from '../../../public/images/strived_ui_home.png';

const Strived = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Strived',
    projectdescription:
      'Strived is a fully customised gift shop that focuses on providing unique and high-quality products.',
    projectdescription1: 'The Shopify website was designed using a sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: striveduihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription: 'Website design and copywriting',
    projectdate: 'June 2021 - July 2021',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'https://strivedmy.com/',
    websitelabel: 'Landing Page',
  };

  return (
    <MyLayout title="Strived Malaysia">
      <ProjectDetail item={portfolio} />
    </MyLayout>
  );
};

export default Strived;
