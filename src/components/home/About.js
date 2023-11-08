import LazyImage from '../lazy-image';
import Tilt from 'react-parallax-tilt';

import styles from '../styles/About.module.css';

// Assets
import iphone from '../../../public/gif/PhoneGIF.gif';
import side from '../../../public/images/side.png';

const About = ({jp}) => {
  return (
    <section className={styles['about-container']} id={styles['about']}>
      <div className={styles['about-wrap']}>
        <AboutLeftSection />
        <AboutRightSection jp={jp}/>
      </div>
    </section>
  );
};

const AboutLeftSection = () => {
  return (
    <div className={styles['about-left-container']} data-aos="fade-right">
      {/* <Tilt tiltReverse={true} tiltMaxAngleY={5} tiltMaxAngleX={0}> */}
        <LazyImage
          src={iphone}
          className={styles['about-iphone']}
          data-aos-delay="100"
        />
      {/* </Tilt> */}
    </div>
  );
};

const AboutRightSection = ({jp}) => {
  return (
    <div className={styles['about-right-container']} data-aos="fade-up">
      <h2 className={styles['about-header']}>{jp ? 'シェーン': 'Hey There!'}</h2>
      {/* <h2 className={styles['about-subhead']}>I'm Yeap Jia Sheng</h2> */}
      <p className={styles['about-right-content']}>
        I am currently a UI/UX Designer in Steelcase.
        I am also a UI/UX Designer and Developer focused on creating user-centric
        experiences and aesthetic visuals. I have a strong passion for Web
        Design, UI/UX Design, UI/UX Develepment and Frontend Coding. I
        pay attention to details and put priority on overall UI design
        consistency. I am not afraid to challenge conventional UI design
        patterns and making bold choices. I am always learning and striving hard
        to improve myself everyday.
      </p>
    </div>
  );
};

export default About;