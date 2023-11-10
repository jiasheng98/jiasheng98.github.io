import {useState} from 'react';
import Link from 'next/link';
import Logo from '../../public/Logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import styles from './styles/Header.module.css';
import {BsGlobe2} from 'react-icons/bs';

const Navbar = ({jp, overlay}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (params) => {
    setOpen((prev) => !prev);
  };
  

  return (
    <nav  className={!overlay || open ? styles['']  : styles['overlay'] }>
      <div className={open ? styles['header-container-fixed']  : styles['header-container'] }>
  
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleOpen}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="var(--primarytext)"
          borderRadius={0}
          animationDuration={0.5}
          className={styles['hamburger-menu']}
        />
  
        {open ? 

      <div
      className={styles['mobile-sidebar']}
      >
              <div className={styles['header-navigation-mobile']}>
          <li>
            <Link href={jp ? '/jp/portfolio/PortfolioList' : '/portfolio/PortfolioList'}>
              <a className={styles['portfolio-text']}>{jp ? 'ポートフォリオ': 'Portfolio'}</a>
            </Link>
          </li>
          <li className={styles['resume-style']}>
            <Link href="/Resume(Jia Sheng).pdf">
              <a target="_BLANK" className={styles['resume-text']}>
              {jp ? '履歴書': 'Resume'}
              </a>
            </Link>
          </li>
          <li className={styles['language-style']}>
            <Link href={jp ? '/' : '/jp'}>
              <a className={styles['language-text']}>
                <BsGlobe2 className={styles['language-icon']}/>
              {jp ? '日本語': 'English'}
              </a>
            </Link>
          </li>

        </div>
      </div>
        
        : null}
        <Link href={jp ? '/jp' : '/'}>
          <div className={styles['logo-z-index']} data-aos="zoom-in" data-aos-delay="100">
            <a className={styles['logo-container']}>
              <div className={styles['logo-image-wrapper']}>
                <img
                  src={Logo}
                  className={styles['logo-image']}
                  alt="Jia Sheng Yeap"
                />
              </div>
              <a className={styles['logo-name']}>Jia Sheng Yeap | シェーン</a>
            </a>
          </div>
        </Link>
        

        <div className={styles['header-navigation']}>
          <li>
            <Link href={jp ? '/jp/portfolio/PortfolioList' : '/portfolio/PortfolioList'}>
              <a className={styles['portfolio-text']}>{jp ? 'ポートフォリオ': 'Portfolio'}</a>
            </Link>
          </li>
          <li className={styles['resume-style']}>
            <Link href={jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf'}>
              <a target="_BLANK" className={styles['resume-text']}>
              {jp ? '履歴書': 'Resume'}
              </a>
            </Link>
          </li>
          <li className={styles['language-style']}>
            <Link href={jp ? '/' : '/jp'}>
              <a className={styles['language-text']}>
                <BsGlobe2 className={styles['language-icon']}/>
              {jp ? '日本語': 'English'}
              </a>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
