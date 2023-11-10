import {useEffect, useRef} from 'react';
import Tilt from 'react-parallax-tilt';
import LazyImage from '../lazy-image';
import Typed from 'typed.js';

import styles from '../styles/LandingSection.module.css';

// Assets
import imac from '../../../public/images/macbook.png';
import bg from '../../../public/images/bg.png';

const LandingSection = ({jp}) => {
  useEffect(() => {
    const options = {
      strings: [jp?'UX/UIデザイナー':'UI/UX Designer', jp?'UX/UIデベロッパー':'UI/UX Developer', jp?'フロントエンドエンジニア':'Frontend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(el, options);

    return () => {
      typed.destroy();
    };
  }, []);

  let el = useRef();

  return (
    <>
      <section className={styles['welcome-container']} id={styles['welcome']}>
        {/* <Tilt tiltReverse={true} tiltMaxAngleY={15} tiltMaxAngleX={0}> */}
          <div className={styles['welcome-title-text-container']}>
            <div
              className={styles['welcome-phone-container']}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500">
              <LazyImage src={imac} className={styles['welcome-phone']} />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="800"
              className={styles['text-wrapper']}>
              <h1 className={styles['i-am-text']}>
              {jp ? 'シェーンです,私は': 'Hello, I am Jia Sheng, a'}
                <br />
                <span
                  className={styles['i-am-text-title']}
                  ref={(e) => (el = e)}
                />
                <br/>
                {jp ? 'です。': 'based in Malaysia.'}
              </h1>
            </div>
          </div>
        {/* </Tilt> */}
      </section>
    </>
  );
};

export default LandingSection;
