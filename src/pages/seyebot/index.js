import {useEffect, useRef} from 'react';
import AOS from 'aos';
import styles from '../styles/seyebot.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import CICalculator from '../../components/seyebot/ci-calculator';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Seye from '../../../public/images/seye-logo.png';
import Typed from 'typed.js';

const SeyeBot = () => {
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const options = {
      strings: ['Bot', 'AI'],
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
    <MyLayout title="SeyeBot">
      <div className={styles['seye-bot-container']}>
        <div className={styles['seye-bot-wrapper']}>
          <img src={Seye} className={styles['seye-logo']} />
          <h1>Seye-<span ref={(e) => (el = e)}/></h1>
          <p>Automate Your Trading Experience Like No Other</p>
          <svg
            className={styles['pulse-svg']}
            version="1.2"
            height="300"
            width="600"
            xmlns="http://www.w3.org/2000/svg"
            viewport="0 0 60 60"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <path
              stroke="rgba(15,0,0,0.1)"
              fill="none"
              stroke-width="1"
              stroke-linejoin="round"
              d="
            M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
            />
            <path
              className={styles['pulsar']}
              stroke="rgba(0,155,155,1)"
              fill="none"
              stroke-width="1"
              stroke-linejoin="round"
              d="
            M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
            />
          </svg>
        </div>
        {/* <div
        className={styles['progress-bar-container']}
        >
        <div
        className={styles['progress-bar']}
        >
          <CircularProgressbar value={66} text={`85%`} />
        </div>
        <h1>Annual Percentage Yield (APY)</h1>
        </div> */}
        <div>hi</div>
      </div>
      <div className={styles['seye-bot-graph-container']}>
        <CICalculator />
      </div>
      <Contact />
    </MyLayout>
  );
};

export default SeyeBot;
