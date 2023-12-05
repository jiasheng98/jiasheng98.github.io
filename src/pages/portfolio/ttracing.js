import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail from '../../components/ProjectDetail';

// Assets
import phone from '../../../public/images/iphonexmock.png';
import ttracinguihome from '../../../public/images/ttracing_ui_home.png';

const TTRacing = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'TTRacing',
    projectdescription:
      'TTRacing is a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
    projectdescription1:
      'The Shopify website was designed using sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: ttracinguihome,
    role: 'Creative Lead, UI/UX Designer, UI Developer',
    roledescription:
      'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
    projectdate: 'January 2021 - Present',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, Jquery, Javascript',
    website: true,
    websitelink: 'http://ttracing.my/',
    websitelabel: 'Landing Page'
  };

  const Data = [
    {
      label: 'Consumer',
      href: '/index',
    },
    {
      label: 'Merchant',
      href: '/index',
    },
    {
      label: 'Rider',
      href: '/index',
    },
    {
      label: 'Landing Page',
      href: '/index',
    },
  ];

  const Website = [
    {
      label: 'Landing Page',
      href: 'http://ttracing.my/',
    },
  ];

  return (
    <MyLayout title="TTRacing">
      <ProjectDetail item={PortfolioList} data={Data} />
    </MyLayout>
  );
};

export default TTRacing;
