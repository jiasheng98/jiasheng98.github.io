import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <h6 className={styles['footer-text']}>
        Copyright © 2020 Jia Sheng. All Rights Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
