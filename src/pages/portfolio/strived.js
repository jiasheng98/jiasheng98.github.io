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
      'Snailer is a mobile application and website for food/grocery delivery and vehicle hiring services.',
    projectdescription1:
      'There are total 3 apps and 1 website, mainly Consumer App, Rider App, Merchant App and Snailer Landing Page. The apps and website are designed using playful, clean and modern approach.',
    backgroundColor: '#000000',
    landingimage: striveduihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription:
      'Website design and Copywriting',
    projectdate: 'June 2021 - July 2021',
    appstore: false,
    playstore: false,
    prototype: false,
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
      <ProjectDetail item={PortfolioList} data={Data} website={Website} />
    </MyLayout>
  );
};

export default Strived;
