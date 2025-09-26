import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import LazyImage from '../LazyImage';
import Reveal from '../common/Reveal';

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
    <section className="welcome-container" id="welcome">
      <div className="welcome-title-text-container">
        <Reveal delay={100} className="welcome-phone-container">
          <LazyImage src="/images/macbook.png" className="welcome-phone" alt="Macbook" />
        </Reveal>
        <Reveal animation="fade-right" delay={800} className="text-wrapper">
          <h1 className="i-am-text">
            {jp ? 'シェーンです,私は' : 'Hello, I am Jia Sheng, a'}
            <br />
            <span className="i-am-text-title" ref={elementRef} />
            <br />
            {jp ? 'です。' : 'based in Malaysia.'}
          </h1>
        </Reveal>
      </div>
    </section>
  );
};

export default LandingSection;
