import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail from '../../components/ProjectDetail';

// Assets
import phone from '../../../public/images/iphonexmock.png';

const Urcheckin = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Urcheckin',
    projectdescription:
      'Urcheckin is a lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
    projectdescription1:
      'There are total 2 apps and 2 website, mainly Consumer App, Merchant App, Consumer Website and Merchant Website. Apps are developed using React-native while websites are developed using React',
    backgroundColor: '#E9493C',
    landingimage: phone,
    role: 'UI Developer, UI Designer',
    roledescription:
      'UI developing, UI testing, Fixing Bug, Implement Responsive Design',
    projectdate: 'June - August 2020',
    appstorelink: 'https://apps.apple.com/us/app/urcheckin/id1507771058',
    playstorelink:
      'https://play.google.com/store/apps/details?id=com.urcheckin.beta',
  };

  const Website = [
    {
      label: 'Consumer',
      href: 'https://urcheckin.com/',
    },
    {
      label: 'Merchant',
      href: 'https://host.urcheckin.com/signIn',
    },
  ];

  return (
    <MyLayout title="Urcheckin">
      <ProjectDetail item={PortfolioList} website={Website} />
    </MyLayout>
  );
};

export default Urcheckin;