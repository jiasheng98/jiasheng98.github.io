import { TbBrandLinkedin } from 'react-icons/tb';
import Reveal from '../common/Reveal';
import AppLink from '../common/AppLink';

type ContactProps = {
  icons?: boolean;
  jp?: boolean;
};

const Contact = ({ icons = false, jp = false }: ContactProps) => {
  const heading = jp ? '次のプロジェクトについて話しましょう。' : 'Let’s talk about your next project.';
  const subheading = jp
    ? 'シームレスなUI/UXと魅力的なビジュアル体験づくりをお手伝いします。'
    : 'I help teams craft seamless UI/UX and iconic visual experiences.';
  const cta = jp ? 'メッセージを送る' : 'Send a message';

  return (
    <section id="contact" className="section-spacing relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent blur-3xl" />
      <div className="layout-container--tight">
        <Reveal
          delay={200}
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/70 bg-gradient-to-br from-white via-zinc-100 to-zinc-200 p-12 text-center shadow-2xl backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/10 dark:via-black/60 dark:to-black/80"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-40 dark:opacity-60" />
          <div className="relative space-y-6">
            <p className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{jp ? 'コンタクト' : 'Connect'}</p>
            <h2 className="typography-heading text-zinc-900 transition-colors duration-300 dark:text-white">{heading}</h2>
            <p className="typography-body mx-auto max-w-2xl text-zinc-600 transition-colors duration-300 dark:text-zinc-300">{subheading}</p>
            {icons ? (
              <div className="flex items-center justify-center gap-4">
                <AppLink
                  href="https://www.linkedin.com/in/jia-sheng-yeap-224277143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-3 rounded-full border border-zinc-200/70 bg-white/80 px-6 py-3 typography-button text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-white hover:text-zinc-900 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <TbBrandLinkedin className="h-5 w-5" />
                  LinkedIn
                </AppLink>
              </div>
            ) : null}
            {/* <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{cta}</p> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
