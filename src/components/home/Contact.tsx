import { BsLinkedin } from 'react-icons/bs';
import LazyImage from '../LazyImage';
import Reveal from '../common/Reveal';
import styles from '../styles/Contact.module.css';

type ContactProps = {
  icons?: boolean;
  jp?: boolean;
};

const Contact = ({ icons = false, jp = false }: ContactProps) => {
  return (
    <section className={styles['contact-container']} id={styles['contact']}>
      <LazyImage src="/images/side1.png" className={styles['contact-side-top-right']} alt="Decorative corner" />
      <LazyImage src="/images/side1.png" className={styles['contact-side-bottom-left']} alt="Decorative corner" />
      <Reveal delay={200} className={styles['contact-wrap']}>
        <div>
          <p className={styles['contact-header']}>{jp ? '連絡しましょう！' : "Let's Connect!"}</p>
        </div>
        {icons ? (
          <div className={styles['seye-social-icon']}>
            <a
              href="https://www.linkedin.com/in/jia-sheng-yeap-224277143/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={50} />
            </a>
          </div>
        ) : null}
      </Reveal>
    </section>
  );
};

export default Contact;
