import { useState } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import HamburgerMenu from 'react-hamburger-menu';
import AppLink from './common/AppLink';
import Reveal from './common/Reveal';

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

  const navClassName = overlay && !open ? 'overlay' : '';
  const containerClassName = open ? 'header-container-fixed' : 'header-container';

  const portfolioHref = jp ? '/jp/portfolio' : '/portfolio';
  const resumeHref = jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf';
  const languageHref = jp ? '/' : '/jp';
  const languageLabel = jp ? '日本語' : 'English';
  const portfolioLabel = jp ? 'ポートフォリオ' : 'Portfolio';
  const resumeLabel = jp ? '履歴書' : 'Resume';

  const NavigationLinks = () => (
    <>
      <li>
        <AppLink href={portfolioHref} className="portfolio-text" onClick={closeMenu}>
          {portfolioLabel}
        </AppLink>
      </li>
      <li className="resume-style">
        <AppLink
          href={resumeHref}
          className="resume-text"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {resumeLabel}
        </AppLink>
      </li>
      <li className="language-style">
        <AppLink href={languageHref} className="language-text" onClick={closeMenu}>
          <BsGlobe2 className="language-icon" />
          {languageLabel}
        </AppLink>
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
          className="hamburger-menu"
        />

        {open ? (
          <div className="mobile-sidebar">
            <ul className="header-navigation-mobile">
              <NavigationLinks />
            </ul>
          </div>
        ) : null}

        <Reveal animation="zoom-in" delay={100} className="logo-z-index">
          <AppLink href={jp ? '/jp' : '/'} className="logo-container" onClick={closeMenu}>
            <span className="logo-image-wrapper">
              <img src="/Logo.png" className="logo-image" alt="Jia Sheng Yeap" />
            </span>
            <span className="logo-name">Jia Sheng Yeap | シェーン</span>
          </AppLink>
        </Reveal>

        <ul className="header-navigation">
          <NavigationLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
