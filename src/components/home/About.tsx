import LazyImage from '../LazyImage';
import Reveal from '../common/Reveal';
import styles from '../styles/About.module.css';

const About = ({ jp = false }: { jp?: boolean }) => {
  return (
    <section className={styles['about-container']} id={styles['about']}>
      <div className={styles['about-wrap']}>
        <AboutLeftSection />
        <AboutRightSection jp={jp} />
      </div>
    </section>
  );
};

const AboutLeftSection = () => {
  return (
    <Reveal animation="fade-right" className={styles['about-left-container']}>
      <LazyImage src="/gif/PhoneGIF.gif" className={styles['about-iphone']} alt="Phone animation" />
    </Reveal>
  );
};

const AboutRightSection = ({ jp }: { jp: boolean }) => {
  return (
    <Reveal className={styles['about-right-container']}>
      <h2 className={styles['about-header']}>{jp ? 'Hey There!' : 'Hey There!'}</h2>
      <p className={styles['about-right-content']}>
        {jp
          ? 'スチールケース社でUI/UXデザイナーとして働いています。ウェブデザイン、UI/UXデザイン、UI/UXデベロップメントやフロントエンド開発に対して、強いパッションを持っています。細部にまで気を配り、UI全体のデザインの一貫性を重視しています。大胆な選択をすることを恐れません。常に学び、自分自身を向上させるために毎日努力しています。'
          : 'I am currently a UI/UX Designer in Steelcase. I am also a UI/UX Designer and Developer focused on creating user-centric experiences and aesthetic visuals. I have a strong passion for Web Design, UI/UX Design, UI/UX Development and Frontend Coding. I pay attention to details and put priority on overall UI design consistency. I am not afraid to challenge conventional UI design patterns and making bold choices. I am always learning and striving hard to improve myself everyday.'}
      </p>
    </Reveal>
  );
};

export default About;
