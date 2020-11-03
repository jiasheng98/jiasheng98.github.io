import LazyImage from "../../components/lazy-image";

import styles from "../styles/Contact.module.css";

//Assets
import side1 from "../../../public/images/side1.png";

const Contact = () => {
  return (
    <section className={styles["contact-container"]} id={styles["contact"]}>
      <LazyImage src={side1} className={styles["contact-side-top-right"]} />
      <LazyImage src={side1} className={styles["contact-side-bottom-left"]} />
      <div
        className={styles["contact-wrap"]}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <p className={styles["contact-header"]}>Let's Connect!</p>
          {/* <p className={styles["contact-header"]}>Want Me?</p> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
