import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../components/ProjectDetail';
import snaileruihome from '../../../public/images/snailer_ui_home.png';
import snailerfood from '../../../public/images/SnailerFood.png';
import snailergrocery from '../../../public/images/SnailerGrocery.png';
import snailercar from '../../../public/images/SnailerCar.png';

const Snailer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Snailer',
    projectdescription:
      'Snailer is a mobile application and website for food/grocery delivery and vehicle hiring services.',
    projectdescription1:
      'There are total 3 apps and 1 website, mainly Consumer App, Rider App, Merchant App and Snailer Landing Page. The apps and website are designed using playful, clean and modern approach.',
    backgroundColor: '#468d65',
    landingimage: snaileruihome,
    role: 'UI/UX Designer, UI Developer',
    roledescription: 'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
    projectdate: 'July - December 2020',
    appstorelink: 'https://apps.apple.com/us/app/snailer/id1540536548',
    playstorelink: 'https://play.google.com/store/apps/details?id=com.snailer_consumer&hl=en&gl=US',
    prototype: false,
    appstore: true,
    playstore: true,
    designsoftware: 'Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects',
    developmentsoftware: 'React, HTML, CSS, Javascript',
    website: false,
  };

  return (
    <MyLayout title="Snailer">
      <ProjectDetail item={portfolio} />
    </MyLayout>
  );
};

export default Snailer;
