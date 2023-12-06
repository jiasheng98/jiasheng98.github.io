import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail from '../../components/ProjectDetail';

// Assets
import phone from '../../../public/images/iphonexmock.png';
import steelcaseuihome from '../../../public/images/steelcase_ui_home.png';

const Steelcase = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Steelcase',
    projectdescription:
      'Steelcase is an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
    projectdescription1:
      'The Shopify website was designed using sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: steelcaseuihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription:
      'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
    projectdate: 'March 2022 - Present',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, Jquery, Javascript',
    website: true,
    websitelink: 'https://shop.steelcase.com/',
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

  // const Website = [
  //   {
  //     label: 'Landing Page',
  //     href: 'http://ttracing.my/',
  //   },
  // ];

  return (
    <MyLayout title="Steelcase">
      <ProjectDetail item={PortfolioList} data={Data}/>
    </MyLayout>
  );
};

export default Steelcase;

