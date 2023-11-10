import LazyImage from '../lazy-image';
import Link from 'next/link';

import styles from '../styles/Contact.module.css';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';

//Assets
import side1 from '../../../public/images/side1.png';

const Contact = ({icons, jp}) => {
  return (
    <section className={styles['contact-container']} id={styles['contact']}>
      <LazyImage src={side1} className={styles['contact-side-top-right']} />
      <LazyImage src={side1} className={styles['contact-side-bottom-left']} />
      <div
        className={styles['contact-wrap']}
        data-aos="fade-up"
        data-aos-delay="200">
        <div>
          <p className={styles['contact-header']}>{jp ? '連絡しましょう！': 'Let\'s Connect!'}</p>
          {/* <p className={styles["contact-header"]}>Want Me?</p> */}
        </div>
        {icons ? (
          <div
          className={styles['seye-social-icon']}
          >
            <a
              href="https://www.linkedin.com/in/jia-sheng-yeap-224277143/"
              target="_blank">
              <BsLinkedin
              color='' size={50}/>
            </a>
            {/* <a
              href="https://www.instagram.com/seyefactory/?hl=en"
              target="_blank">
              <BsInstagram color='#833AB4' size={50}/>
            </a> */}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Contact;
