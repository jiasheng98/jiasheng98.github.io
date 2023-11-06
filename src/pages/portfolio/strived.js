import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail from '../../components/ProjectDetail';

// Assets
import phone from '../../../public/images/iphonexmock.png';
import striveduihome from '../../../public/images/strived_ui_home.png';

const Strived = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Strived',
    projectdescription:
      'Strived is a fully customised gift shop that focuses on providing unique and high-quality products.',
    projectdescription1:
      'The Shopify website was designed using sleek, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: striveduihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription:
      'Website design and Copywriting',
    projectdate: 'June 2021 - July 2021',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, Jquery, Javascript',
    website: true,
    websitelink: 'https://strivedmy.com/',
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
    <MyLayout title="Strived Malaysia">
      <ProjectDetail item={PortfolioList} data={Data} website={Website} />
    </MyLayout>
  );
};

export default Strived;

