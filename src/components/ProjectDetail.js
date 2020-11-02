import styles from './styles/ProjectDetail.module.css';

import phone from '../../public/images/iphonexmock.png';

const ProjectDetail = () => {
  const PortfolioList = {
    //   logo: snailer,
    title: 'Snailer',
    subtitle:
      'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
    backgroundColor: '#22c639',
    //   image1: snailerfood,
    //   image2: snailergrocery,
    //   image3: snailercar,
    landingimage: phone,
    href: '/portfolio/Snailer',
  };

  return (
    <>
      <LandingSection item={PortfolioList} />
      <DescriptionSection item={PortfolioList}/>
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
      <div
        className={styles['description-section-container']}>
            <div
            className={styles['description-wrapper']}
            >
            <h1
            className={styles['title-text']}
            >
                {item.title}
            </h1>
            <p>
                Overview
            </p>
            </div>
      </div>
    );
  };

export default ProjectDetail;
