import styles from './styles/Footer.module.css';

const Footer = ({jp}) => {
  return (
    <footer className={styles['footer-container']}>
      <h6 className={styles['footer-text']}>
        {jp ? '著作権©2023 Jia Sheng Yeapを求める すべての権利を保有。': 'Copyright © 2023 Jia Sheng. All Rights Reserved.'}
      </h6>
    </footer>
  );
};

export default Footer;
