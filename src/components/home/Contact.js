import LazyImage from '../lazy-image';
import Link from 'next/link';

import styles from '../styles/Contact.module.css';
import {BsDiscord, BsInstagram} from 'react-icons/bs';

//Assets
import side1 from '../../../public/images/side1.png';

const Contact = ({seyefactory}) => {
  return (
    <section className={styles['contact-container']} id={styles['contact']}>
      <LazyImage src={side1} className={styles['contact-side-top-right']} />
      <LazyImage src={side1} className={styles['contact-side-bottom-left']} />
      <div
        className={styles['contact-wrap']}
        data-aos="fade-up"
        data-aos-delay="200">
        <div>
          <p className={styles['contact-header']}>Let's Connect!</p>
          {/* <p className={styles["contact-header"]}>Want Me?</p> */}
        </div>
        {seyefactory ? (
          <div
          className={styles['seye-social-icon']}
          >
            <a
              href="https://discord.com/invite/xr8kMjpmV6"
              target="_blank">
              <BsDiscord 
              color='#7289DA' size={50}/>
            </a>
            <a
              href="https://www.instagram.com/seyefactory/?hl=en"
              target="_blank">
              <BsInstagram color='#833AB4' size={50}/>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Contact;
