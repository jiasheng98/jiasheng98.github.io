import styles from './styles/ProjectDetail.module.css';

import phone from '../../public/images/iphonexmock.png';

const ProjectDetail = () => {
  const PortfolioList = {
    title: 'Snailer',
    projectdescription:
      'Snailer is a mobile application and website for food/grocery delivery and vehicle hiring services.',
    projectdescription1:
      'There are total 3 apps and 1 website, mainly Consumer App, Rider App, Merchant App and Snailer Landing Page. The apps and website are designed using playful, clean and modern approach.',
    backgroundColor: '#22c639',
    landingimage: phone,
    href: '/portfolio/Snailer',
    role: 'UI/UX Designer, UI Developer',
    roledescription:
      'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
    projectdate: 'July - December 2020',
  };

  return (
    <>
      <LandingSection item={PortfolioList} />
      <DescriptionSection item={PortfolioList} />
    </>
  );
};

const LandingSection = ({item}) => {
  return (
    <div
      className={styles['landing-section-container']}
      style={{backgroundColor: item.backgroundColor}}>
      <img src={item.landingimage} className={styles['image-container']} />
    </div>
  );
};

const DescriptionSection = ({item}) => {
  return (
    <div className={styles['description-section-container']}>
      <div className={styles['description-wrapper']}>
        <h1 className={styles['title-text']}>{item.title}</h1>
        <div className={styles['description-subtitle']}>
          <div>
            <p>Overview</p>
            <p>{item.projectdescription}</p>
            <p>{item.projectdescription1}</p>
          </div>
          <div>
            <p>Role</p>
            <p className={styles['role-title']}>{item.role}</p>
            <p>{item.roledescription}</p>
            <p>{item.projectdate}</p>
          </div>
        </div>
        <div className={styles['button-container']}>
          <a
            style={{backgroundColor: item.backgroundColor}}
            className={styles['prototype-button']}
            href="/">
            <div>
              <p>See Prototype (Consumer)</p>
            </div>
          </a>
          <a
            style={{backgroundColor: item.backgroundColor}}
            className={styles['prototype-button']}
            href="/">
            <div>
              <p>See Prototype (Rider)</p>
            </div>
          </a>
          <a
            style={{backgroundColor: item.backgroundColor}}
            className={styles['prototype-button']}
            href="/">
            <div>
              <p>See Prototype (Merchant)</p>
            </div>
          </a>
          <a
            style={{backgroundColor: item.backgroundColor}}
            className={styles['prototype-button']}
            href="/">
            <div>
              <p>See Prototype (Landing Page)</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
