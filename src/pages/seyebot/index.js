import {useEffect} from 'react';
import AOS from 'aos';
import styles from '../styles/seyebot.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import CICalculator from '../../components/seyebot/ci-calculator';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SeyeBot = () => {
  useEffect(() => {
    AOS.init();
  });


  return (
    <MyLayout title="SeyeBot">
      <div
      className={styles['seye-bot-container']}
      >
<h1>Seye-Bot</h1>
<p>An Expert Advisor </p>
<div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={66} text={`85%`} />
</div>
      </div>
         <div className={styles['seye-bot-graph-container']}>
         <CICalculator/>
      </div>
      <Contact />
    </MyLayout>
  );
};

export default SeyeBot;
