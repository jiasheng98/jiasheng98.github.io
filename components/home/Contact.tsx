import { BsLinkedin } from 'react-icons/bs';
import LazyImage from '../LazyImage';
import Reveal from '../common/Reveal';

type ContactProps = {
  icons?: boolean;
  jp?: boolean;
};

const Contact = ({ icons = false, jp = false }: ContactProps) => {
  return (
    <section className="contact-container" id="contact">
      <LazyImage src="/images/side1.png" className="contact-side-top-right" alt="Decorative corner" />
      <LazyImage src="/images/side1.png" className="contact-side-bottom-left" alt="Decorative corner" />
      <Reveal delay={200} className="contact-wrap">
        <div>
          <p className="contact-header">{jp ? '連絡しましょう！' : "Let's Connect!"}</p>
        </div>
        {icons ? (
          <div className="seye-social-icon">
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
