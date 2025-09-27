import { useEffect, useState } from 'react';
import { TbMoon, TbSun, TbWorld } from 'react-icons/tb';
import HamburgerMenu from 'react-hamburger-menu';
import AppLink from './common/AppLink';
import { useTheme } from './common/ThemeProvider';

type HeaderProps = {
  jp?: boolean;
  overlay?: boolean;
};

const Header = ({ jp = false, overlay = false }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const portfolioHref = jp ? '/jp/portfolio' : '/portfolio';
  const resumeHref = jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf';
  const languageHref = jp ? '/' : '/jp';
  const languageLabel = jp ? '日本語' : 'English';
  const portfolioLabel = jp ? 'ポートフォリオ' : 'Portfolio';
  const resumeLabel = jp ? '履歴書' : 'Resume';

  const isTransparent = overlay && !scrolled;
  const wrapperClasses = [
    'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out',
    isTransparent
      ? 'bg-transparent text-zinc-900 dark:text-white'
      : 'bg-white/80 text-zinc-900 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:bg-black/80 dark:text-zinc-100 dark:shadow-black/10',
  ]
    .filter(Boolean)
    .join(' ');

  const ThemeToggle = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-white dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20"
      aria-label={jp ? 'テーマを切り替える' : 'Toggle theme'}
    >
      {isDark ? <TbSun className="h-4 w-4" /> : <TbMoon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? (jp ? 'ライト' : 'Light') : (jp ? 'ダーク' : 'Dark')}</span>
    </button>
  );

  const NavigationLinks = () => (
    <>
      {/* <li>
        <AppLink
          href={portfolioHref}
          className="text-sm font-medium tracking-wide text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
          onClick={closeMenu}
        >
          {portfolioLabel}
        </AppLink>
      </li> */}
      <li>
        <AppLink
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-900 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-black"
          onClick={closeMenu}
        >
          {resumeLabel}
        </AppLink>
      </li>
      <li>
        <AppLink
          href={languageHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
          onClick={closeMenu}
        >
          <TbWorld className="h-4 w-4" />
          {languageLabel}
        </AppLink>
      </li>
      <li className="mt-2 lg:mt-0">
        <ThemeToggle />
      </li>
    </>
  );

  return (
    <header className={wrapperClasses}>
      <div className="layout-container flex h-20 items-center justify-between gap-6 md:h-24">
        <div className="flex items-center gap-8">
          <AppLink
            href={jp ? '/jp' : '/'}
            className="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold tracking-wide transition hover:opacity-80"
            onClick={closeMenu}
          >
            <img src="/Logo.png" alt="Jia Sheng Yeap" className="h-12 w-auto sm:h-14" />
            <span className="hidden text-sm font-medium sm:inline-flex">
              {jp ? 'シェン' : 'Jia Sheng Yeap'}
            </span>
          </AppLink>
        </div>

        <nav aria-label="Primary" className="hidden list-none items-center gap-8 lg:flex">
          <NavigationLinks />
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex items-center lg:hidden"
          onClick={toggleMenu}
        >
          <HamburgerMenu
            isOpen={open}
            menuClicked={() => { }}
            width={22}
            height={18}
            strokeWidth={2}
            color={isTransparent ? (isDark ? '#f4f4f5' : '#18181b') : isDark ? '#f4f4f5' : '#18181b'}
            animationDuration={0.5}
          />
        </button>
      </div>

      {open ? (
        // <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl lg:hidden dark:bg-black/80" onClick={closeMenu}>
        <div
          className="absolute inset-x-6 top-24 rounded-3xl bg-white p-8 text-left shadow-2xl dark:bg-zinc-900"
          onClick={(event) => event.stopPropagation()}
        >
          <nav
            aria-label="Mobile"
            className="flex list-none flex-col gap-6 text-lg text-zinc-800 dark:text-zinc-100"
          >
            <NavigationLinks />
          </nav>
        </div>
        // </div>
      ) : null}
    </header>
  );
};

export default Header;
