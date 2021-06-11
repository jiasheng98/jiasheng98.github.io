import LazyImage from '../lazy-image';
import Tilt from 'react-parallax-tilt';

import styles from '../styles/About.module.css';

// Assets
import iphone from '../../../public/gif/PhoneGIF.gif';
import side from '../../../public/images/side.png';

const About = () => {
  return (
    <section className={styles['about-container']} id={styles['about']}>
      <LazyImage src={side} className={styles['about-side-top-right']} />
      <LazyImage src={side} className={styles['about-side-top-left']} />
      <LazyImage src={side} className={styles['about-side-bottom-right']} />
      <LazyImage src={side} className={styles['about-side-bottom-left']} />
      <div className={styles['about-wrap']}>
        <AboutLeftSection />
        <AboutRightSection />
      </div>
    </section>
  );
};

const AboutLeftSection = () => {
  return (
    <div className={styles['about-left-container']} data-aos="fade-right">
      <Tilt tiltReverse={true} tiltMaxAngleY={5} tiltMaxAngleX={0}>
        <LazyImage
          src={iphone}
          className={styles['about-iphone']}
          data-aos-delay="100"
        />
      </Tilt>
    </div>
  );
};

const AboutRightSection = () => {
  return (
    <div className={styles['about-right-container']} data-aos="fade-up">
      <h2 className={styles['about-header']}>Hey There!</h2>
      <h2 className={styles['about-subhead']}>I'm Yeap Jia Sheng</h2>
      <p className={styles['about-right-content']}>
        I am currently a Creative Lead in TTRacing.
        I am also a UI/UX Designer and Developer focused on creating user-centric
        experiences and aesthetic visuals. I have a strong passion for Web
        Design, UI/UX Design, Illustration, Motion Graphics, and Animation. I
        pay attention to details and put priority on overall UI design
        consistency. I am not afraid to challenge conventional UI design
        patterns and making bold choices. I am always learning and striving hard
        to improve myself everyday.
      </p>
    </div>
  );
};

export default About;