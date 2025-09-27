import { useEffect, useMemo, useState, useId, type ChangeEvent } from 'react';
import { TbMoon, TbSun, TbWorld } from 'react-icons/tb';
import HamburgerMenu from 'react-hamburger-menu';
import AppLink from './common/AppLink';
import { useTheme } from './common/ThemeProvider';
import { useRouter } from 'next/router';

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

  const { asPath, push } = useRouter();
  const languageSelectId = useId();

  const portfolioHref = jp ? '/jp/portfolio' : '/portfolio';
  const resumeHref = jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf';
  const englishHref = useMemo(() => {
    if (!jp) {
      return asPath && asPath !== '' ? asPath : '/';
    }

    const englishPath = asPath.replace(/^\/jp(?=\/|$)/, '') || '/';
    return englishPath.startsWith('/') ? englishPath : `/${englishPath}`;
  }, [asPath, jp]);

  const japaneseHref = useMemo(() => {
    if (jp) {
      return asPath && asPath !== '' ? asPath : '/jp';
    }

    if (asPath === '/' || asPath === '') {
      return '/jp';
    }

    if (asPath.startsWith('/jp')) {
      return asPath;
    }

    return `/jp${asPath.startsWith('/') ? '' : '/'}${asPath}`;
  }, [asPath, jp]);

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
      role="switch"
      aria-checked={isDark}
      aria-label={jp ? 'テーマを切り替える' : 'Toggle theme'}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 ${
        isDark ? 'bg-zinc-700 dark:bg-zinc-600' : 'bg-zinc-300 dark:bg-zinc-700'
      }`}
    >
      <span
        className={`absolute inset-y-0 left-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-zinc-700 transition ${
          isDark ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {isDark ? <TbMoon className="h-3.5 w-3.5" /> : <TbSun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;

    if (selectedLanguage === 'jp') {
      closeMenu();
      if (!jp) {
        void push(japaneseHref);
      }
      return;
    }

    closeMenu();
    if (jp) {
      void push(englishHref);
    }
  };

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
        <div className="inline-flex items-center gap-2">
          <TbWorld className="h-4 w-4 text-zinc-700 dark:text-zinc-200" />
          <label htmlFor={languageSelectId} className="sr-only">
            {jp ? '言語を選択' : 'Select language'}
          </label>
          <select
            id={languageSelectId}
            value={jp ? 'jp' : 'en'}
            onChange={handleLanguageChange}
            className="rounded-full border border-transparent bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-white focus:border-zinc-400 focus:outline-none dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/20 dark:focus:border-zinc-500"
          >
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>
        </div>
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
