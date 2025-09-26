import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGlobe2 } from 'react-icons/bs';
import HamburgerMenu from 'react-hamburger-menu';
import styles from './styles/Header.module.css';
import Logo from '../../public/Logo.png';

type HeaderProps = {
  jp?: boolean;
  overlay?: boolean;
};

const Header = ({ jp = false, overlay = false }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const navClassName = overlay && !open ? styles['overlay'] : '';
  const containerClassName = open
    ? styles['header-container-fixed']
    : styles['header-container'];

  const portfolioHref = jp ? '/jp/portfolio/PortfolioList' : '/portfolio/PortfolioList';
  const resumeHref = jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf';
  const languageHref = jp ? '/' : '/jp';
  const languageLabel = jp ? '日本語' : 'English';
  const portfolioLabel = jp ? 'ポートフォリオ' : 'Portfolio';
  const resumeLabel = jp ? '履歴書' : 'Resume';

  const NavigationLinks = () => (
    <>
      <li>
        <Link href={portfolioHref} className={styles['portfolio-text']} onClick={closeMenu}>
          {portfolioLabel}
        </Link>
      </li>
      <li className={styles['resume-style']}>
        <Link
          href={resumeHref}
          className={styles['resume-text']}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {resumeLabel}
        </Link>
      </li>
      <li className={styles['language-style']}>
        <Link href={languageHref} className={styles['language-text']} onClick={closeMenu}>
          <BsGlobe2 className={styles['language-icon']} />
          {languageLabel}
        </Link>
      </li>
    </>
  );

  return (
    <nav className={navClassName}>
      <div className={containerClassName}>
        <HamburgerMenu
          isOpen={open}
          menuClicked={toggleMenu}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="var(--primarytext)"
          borderRadius={0}
          animationDuration={0.5}
          className={styles['hamburger-menu']}
        />

        {open ? (
          <div className={styles['mobile-sidebar']}>
            <ul className={styles['header-navigation-mobile']}>
              <NavigationLinks />
            </ul>
          </div>
        ) : null}

        <div className={styles['logo-z-index']} data-aos="zoom-in" data-aos-delay="100">
          <Link href={jp ? '/jp' : '/'} className={styles['logo-container']} onClick={closeMenu}>
            <span className={styles['logo-image-wrapper']}>
              <Image
                src={Logo}
                className={styles['logo-image']}
                alt="Jia Sheng Yeap"
                priority
                placeholder="empty"
              />
            </span>
            <span className={styles['logo-name']}>Jia Sheng Yeap | シェーン</span>
          </Link>
        </div>

        <ul className={styles['header-navigation']}>
          <NavigationLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
