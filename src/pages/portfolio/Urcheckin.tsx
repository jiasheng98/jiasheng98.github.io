import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../components/ProjectDetail';
import urcheckinuihome from '../../../public/images/urcheckin_ui_home.png';

const Urcheckin = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Urcheckin',
    projectdescription:
      'Urcheckin is a lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
    projectdescription1:
      'There are total 2 apps and 2 website, mainly Consumer App, Merchant App, Consumer Website and Merchant Website. Apps are developed using React Native while websites are developed using React.',
    backgroundColor: '#E9493C',
    landingimage: urcheckinuihome,
    role: 'UI Developer, UI Designer',
    roledescription: 'UI developing, UI testing, fixing bugs, implementing responsive design',
    projectdate: 'June - August 2020',
    appstore: true,
    playstore: true,
    appstorelink: 'https://apps.apple.com/us/app/urcheckin/id1507771058',
    playstorelink: 'https://play.google.com/store/apps/details?id=com.urcheckin_host.beta&hl=en_US&gl=US',
    designsoftware: 'Adobe XD, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'React, HTML, CSS, Javascript',
    website: false,
  };

  return (
    <MyLayout title="Urcheckin">
      <ProjectDetail item={portfolio} />
    </MyLayout>
  );
};

export default Urcheckin;
