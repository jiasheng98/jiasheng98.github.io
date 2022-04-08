import {useEffect, useRef, useState} from 'react';
import AOS from 'aos';
import styles from '../styles/seyebot.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import CICalculator from '../../components/seyebot/ci-calculator';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Seye from '../../../public/images/seye-logo.png';
import backtest from '../../../public/images/backtest.gif';
import Typed from 'typed.js';
import {FiChevronsDown} from 'react-icons/fi';
import Link from 'next/link';
import ChangingProgressProvider from '../../components/seyebot/ChangingProgressProvider';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

const SeyeBot = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="SeyeBot">
      <LandingSection />
      <DescriptionSection />
      <CompundCalculator />
      <GuideSection />
      <Contact seyefactory />
      <NFASection />
    </MyLayout>
  );
};

const LandingSection = () => {
  useEffect(() => {
    const options = {
      strings: ['Bot'],
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
    <div className={styles['seye-bot-container']}>
      <div className={styles['seye-bot-wrapper']}>
        <img src={Seye} className={styles['seye-logo']} />
        <h1>
          Seye-
          <span ref={e => (el = e)} />
        </h1>
        <p>Automate Your Trading Experience Like No Other</p>
        <a href="#guide" className={styles['get-started']}>
          Get Started
        </a>
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
      <div>
        <a href="#description">
          <Link href="#description" scroll={true}>
            <FiChevronsDown color="var(--secondary)" size={40} />
          </Link>
        </a>
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <div id="description" className={styles['seye-description-container']}>
      <div className={styles['seye-description-wrapper']}>
        <div className={styles['description-text-container']}>
          <h1>How Does Seye-Bot Works?</h1>
          <hr className={styles['hr']} />
          <p>
            Seye-Bot is an expert advisor developed by <span>Seyefactory</span>.
            Seye-Bot trades only <span>GBP/USD</span> and uses{' '}
            <span>Multi-Timeframe Technical Analysis</span> where it executes
            precision trade opening through 15m, 4hr, 1D, and 1W charts.
            Besides, Seye-Bot uses various combined trading strategies such as{' '}
            <span>SMA Crossover, RSI, MACD, and Grid Trading</span>. Seye-Bot
            works based on compound interest and projected annual earnings of{' '}
            <span>70%</span>.
          </p>
        </div>
        <div className={styles['progress-bar-container']}>
          <div>
            <div className={styles['progress-bar']}>
              <ChangingProgressProvider values={[70]}>
                {percentage => (
                  <CircularProgressbar
                    styles={buildStyles({
                      textColor: '#DF678C',
                      pathColor: '#DF678C',
                      backgroundColor: 'white',
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                      pathTransitionDuration: 1,
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                    circleRatio={0.75}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <h1>Annual Percentage Yield (APY)</h1>
          </div>

          <div>
            <div className={styles['progress-bar']}>
              <ChangingProgressProvider values={[20, 35]}>
                {percentage => (
                  <CircularProgressbar
                    styles={buildStyles({
                      textColor: '#DF678C',
                      pathColor: '#DF678C',
                      backgroundColor: 'white',
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
                      pathTransitionDuration: 1,
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                    circleRatio={0.75}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <h1>Maximum Drawdown (Projected)</h1>
          </div>
        </div>
        <div className={styles['description-text-container']}>
          <h1>Real-time Updates</h1>
          <hr className={styles['hr']} />
          {/* <iframe
            className={styles['iframe-graph']}
            src="https://staticmy.roboforex.com/en/informers/providers/frame/large/113089/"
            height="508"
            width="405"
            frameborder="0"></iframe> */}
          <iframe
            className={styles['iframe-graph']}
            src="https://staticmy.roboforex.com/en/informers/providers/frame/performance/113089/"
            height="508"
            width="405"
            frameborder="0"></iframe>
        </div>
        <div
          className={styles['description-text-container']}
          style={{marginTop: '2rem'}}>
          <h1>12 Years Backtest Results</h1>
          <hr className={styles['hr']} />
          <img src={backtest} />
          <p style={{marginTop: '1rem'}}>
            <span>Period</span>: 1st Jan 2010 - 1st June 2021
            <br />
            <span>Starting Capital</span>: 2000 USD
            <br />
            <span>Final Amount</span>: 2,638,871 USD
          </p>
        </div>
      </div>
    </div>
  );
};

const CompundCalculator = () => {
  return (
    <div className={styles['seye-bot-graph-container']}>
      <CICalculator />
    </div>
  );
};

const GuideSection = () => {
  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);

  return (
    <div id="guide" className={styles['seye-guide-container']}>
      <div className={styles['seye-guide-wrapper']}>
        <div className={styles['guide-text-container']}>
          <h1>How To Use Seye-Bot?</h1>
          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}>
              <div className={styles['guide-numbering']}>
                <div>1</div>
              </div>
              <div>Open an account on Roboforex</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={open}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Open an account{' '}
                <a target="_blank" href="https://my.roboforex.com/en/?a=lklj">
                  here
                </a>
                <br />- Choose <span>'MT4 Pro'</span> for account type
                <br />- Choose <span>'1:1000'</span> for leverage
                <br />- Fill in all the respective details
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpenone(!openone)}
              aria-controls="example-collapse-text"
              aria-expanded={openone}>
              <div className={styles['guide-numbering']}>
                <div>2</div>
              </div>
              <div>Proceed for verification</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={openone}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Click <span>'Pass the verification'</span> and proceed with
                the verification
                <br />- You would need to verify your <span>email</span>,{' '}
                <span>ID</span> as well as <span>address</span>
                <br />- An email will be sent once your verification is
                successful
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpentwo(!opentwo)}
              aria-controls="example-collapse-text"
              aria-expanded={opentwo}>
              <div className={styles['guide-numbering']}>
                <div>3</div>
              </div>
              <div>Deposit fund</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={opentwo}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Proceed to deposit a minumum of <span>500 USD</span> to your
                trading account
                <br />- Recommended to use{' '}
                <span>Paytrust (Local Bank Transfer Option 2)</span> to deposit
                your fund
                <br />- Please don't hesitate to contact us here if you face any
                issues!
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpenthree(!openthree)}
              aria-controls="example-collapse-text"
              aria-expanded={openthree}>
              <div className={styles['guide-numbering']}>
                <div>4</div>
              </div>
              <div>Subscribe to the Seye-Bot</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={openthree}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Subscribe to the bot{' '}
                <a
                  target="_blank"
                  href="https://my.roboforex.com/register-copyfx/?trader=113089">
                  here
                </a>
                <br />- Now, sit back, relax and enjoy your profits!
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

const NFASection = () => {
  return (
    <div className={styles['seye-nfa-container']}>
      <div className={styles['seye-nfa-wrapper']}>
        <div className={styles['nfa-text-container']}>
          <h1>Risk Warnings and Investment Disclaimers</h1>
          <p>
            Trading involves a significant risk of loss and is not suitable for
            all investors; in particular, past developments do not necessarily
            indicate future results. Please note that the risk of loss in
            trading can be substantial. Please also note that there is no
            agreement or collaboration between broker and Seye-Bot and hence
            will not take any responsibilities regarding the outcome of the
            broker. Please use at your own risk. You should therefore find out
            the details of your financial situation and, if necessary, consult
            professional help to assess whether your personal and financial
            situation allows trading and whether you are in a position to take
            the high risk of loss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeyeBot;
