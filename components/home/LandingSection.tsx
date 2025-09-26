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
  const badge = jp ? 'UI/UXデザイナー & デベロッパー' : 'UI/UX Designer & Developer';
  const primaryCta = jp ? '制作実績を見る' : 'Explore Work';
  const secondaryCta = jp ? '履歴書をダウンロード' : 'Download Resume';
  const supportingCopy = jp
    ? 'Steelcase、TTRacing、Strived、Snailerなど、多彩なブランドと協働してきました。'
    : 'Collaborated with global brands including Steelcase, TTRacing, Strived, and Snailer.';

  return (
    <section
      id="welcome"
      className="relative isolate overflow-hidden bg-gradient-to-b from-black via-black/90 to-night"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-soft opacity-80" />
      <div className="pointer-events-none absolute -left-1/2 top-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/3 bottom-0 h-[28rem] w-[28rem] rounded-full bg-pink-400/20 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col-reverse items-center gap-16 px-6 pb-24 pt-32 md:flex-row md:items-end md:justify-between lg:px-12">
        <div className="max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-200">
            {badge}
          </span>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">{subheadline}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <AppLink
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {primaryCta}
            </AppLink>
            <AppLink
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-white hover:text-white"
            >
              {secondaryCta}
            </AppLink>
          </div>

          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-zinc-500">{supportingCopy}</p>
        </div>

        <div className="relative flex w-full max-w-xl justify-center">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl" />
          <div className="relative w-full rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-black/70 p-6">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-40 rounded-full bg-white/20 blur-3xl" />
              <LazyImage
                src="/images/macbook.png"
                alt="Macbook showcasing interface"
                className="relative z-10 mx-auto w-full max-w-sm object-contain drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)] animate-float"
              />
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Currently</p>
                <p className="mt-1 text-sm font-medium text-zinc-200">UI/UX Designer @ Steelcase</p>
              </div>
              <span className="text-sm font-semibold text-zinc-200">2022 — {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
