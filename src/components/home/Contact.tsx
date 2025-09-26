import LazyImage from '../LazyImage';
import styles from '../styles/Contact.module.css';
import { BsLinkedin } from 'react-icons/bs';
import side1 from '../../../public/images/side1.png';

type ContactProps = {
  icons?: boolean;
  jp?: boolean;
};

const Contact = ({ icons = false, jp = false }: ContactProps) => {
  return (
    <section className={styles['contact-container']} id={styles['contact']}>
      <LazyImage src={side1} className={styles['contact-side-top-right']} alt="Decorative corner" />
      <LazyImage src={side1} className={styles['contact-side-bottom-left']} alt="Decorative corner" />
      <div className={styles['contact-wrap']} data-aos="fade-up" data-aos-delay="200">
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
      </div>
    </section>
  );
};

export default Contact;
