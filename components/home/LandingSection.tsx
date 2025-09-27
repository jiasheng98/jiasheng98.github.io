import LazyImage from '../LazyImage';
import AppLink from '../common/AppLink';

type LandingSectionProps = {
  jp?: boolean;
};

const LandingSection = ({ jp = false }: LandingSectionProps) => {
  const resumeHref = jp ? '/Resume(JiaSheng)Japanese.pdf' : '/Resume(Jia Sheng).pdf';
  const headline = jp
    ? '体験をデザインし、細部まで仕上げる。'
    : 'Designing experiences with an obsessive finish.';
  const subheadline = jp
    ? 'SteelcaseでUI/UXデザイナーとして働きながら、プロダクト戦略からコードまで、ブランドの魅力を形にしています。'
    : 'UI/UX designer and developer at Steelcase, crafting brand stories and interfaces from strategy through polished code.';
  const badge = jp ? 'UI/UXデザイナー' : 'Product Designer';
  const primaryCta = jp ? '制作実績を見る' : 'Explore Work';
  const secondaryCta = jp ? '履歴書をダウンロード' : 'Download Resume';
  const supportingCopy = jp
    ? 'Steelcase、TTRacing、Strived、Snailerなど、多彩なブランドと協働してきました。'
    : 'Collaborated with global brands including Steelcase, TTRacing, Strived, and Snailer.';

  return (
    <section
      id="welcome"
      className="section-spacing section-spacing--hero relative isolate overflow-hidden bg-gradient-to-b from-white via-white/90 to-zinc-100 transition-colors duration-300 dark:from-black dark:via-black/90 dark:to-night"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-soft opacity-60 dark:opacity-80" />
      <div className="pointer-events-none absolute -left-1/2 top-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/3 bottom-0 h-[28rem] w-[28rem] rounded-full bg-pink-400/20 blur-3xl" />

      <div className="layout-container flex flex-col-reverse items-center gap-16 md:flex-row md:items-end md:justify-between">
        <div className="w-full text-center md:text-left">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-700 transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            {badge}
          </span> */}
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 dark:text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 transition-colors duration-300 sm:text-xl dark:text-zinc-300">{subheadline}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <AppLink
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-black dark:shadow-glow"
            >
              {primaryCta}
            </AppLink>
            <AppLink
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300/80 px-8 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/20 dark:text-zinc-100 dark:hover:border-white dark:hover:text-white"
            >
              {secondaryCta}
            </AppLink>
          </div>

          {/* <p className="mt-10 text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">{supportingCopy}</p> */}
        </div>

        {/* <div className="relative flex w-full max-w-xl justify-center">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white via-white/70 to-transparent blur-2xl dark:from-white/10 dark:via-white/5" />
          <div className="relative w-full rounded-[2.5rem] border border-zinc-200/60 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-white/10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-40 rounded-full bg-white/60 blur-3xl dark:bg-white/20" />
            <LazyImage
              src="/images/macbook.png"
              alt="Macbook showcasing interface"
              className="relative z-10 mx-auto w-full max-w-sm object-contain drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)] animate-float md:max-w-xl"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LandingSection;
