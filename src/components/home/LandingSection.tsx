import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import LazyImage from '../LazyImage';
import styles from '../styles/LandingSection.module.css';
import imac from '../../../public/images/macbook.png';

type LandingSectionProps = {
  jp?: boolean;
};

const LandingSection = ({ jp = false }: LandingSectionProps) => {
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    const typed = new Typed(elementRef.current, {
      strings: jp
        ? ['UX/UIデザイナー', 'UX/UIデベロッパー', 'フロントエンドエンジニア']
        : ['UI/UX Designer', 'UI/UX Developer', 'Frontend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [jp]);

  return (
    <section className={styles['welcome-container']} id={styles['welcome']}>
      <div className={styles['welcome-title-text-container']}>
        <div
          className={styles['welcome-phone-container']}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <LazyImage src={imac} className={styles['welcome-phone']} alt="Macbook" />
        </div>
        <div data-aos="fade-right" data-aos-delay="800" className={styles['text-wrapper']}>
          <h1 className={styles['i-am-text']}>
            {jp ? 'シェーンです,私は' : 'Hello, I am Jia Sheng, a'}
            <br />
            <span className={styles['i-am-text-title']} ref={elementRef} />
            <br />
            {jp ? 'です。' : 'based in Malaysia.'}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
