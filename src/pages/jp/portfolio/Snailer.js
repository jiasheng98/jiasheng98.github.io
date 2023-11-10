import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail from '../../../components/ProjectDetail';

// Assets
import phone from '../../../../public/images/iphonexmock.png';
import snaileruihome from '../../../../public/images/snailer_ui_home.png';

const Snailer = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Snailer',
    projectdescription:
      'Snailer is a mobile application and website for food/grocery delivery and vehicle hiring services.',
    projectdescription1:
      'There are total 3 apps and 1 website, mainly Consumer App, Rider App, Merchant App and Snailer Landing Page. The apps and website are designed using playful, clean and modern approach.',
    backgroundColor: '#468d65',
    landingimage: snaileruihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription:
      'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
    projectdate: 'July - December 2020',
    appstorelink: 'https://apps.apple.com/us/app/snailer/id1540536548',
    playstorelink:
      'https://play.google.com/store/apps/details?id=com.snailer_consumer&hl=en&gl=US',
    prototype: false,
    appstore: true,
    playstore: true,
    designsoftware: 'Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects',
    developmentsoftware: 'React, HTML, CSS, Javascript',
    website: false,
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
      href: 'http://thesnailer.com/',
    },
  ];

  return (
    <MyLayout title="Snailer">
      <ProjectDetail item={PortfolioList} data={Data}/>
    </MyLayout>
  );
};

export default Snailer;
