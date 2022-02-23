import {useEffect} from 'react';
import AOS from 'aos';
import styles from '../styles/seyebot.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import CICalculator from '../../components/seyebot/ci-calculator';

const SeyeBot = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="SeyeBot">
         <div className={styles['seye-bot-graph-container']}>
         <CICalculator/>
        <h1 data-aos="fade-up">Let Us Be Your Eye!</h1>
        <iframe
          src="https://staticmy.roboforex.com/en/informers/providers/frame/performance/113089/"
          frameborder="0"
          className={styles['seye-bot-graph']}></iframe>
      </div>
      <Contact />
    </MyLayout>
  );
};

export default SeyeBot;
