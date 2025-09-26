import { BsLinkedin } from 'react-icons/bs';
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
    <section id="contact" className="relative isolate overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <Reveal
          delay={200}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-black/60 to-black/80 p-12 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-60" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{jp ? 'コンタクト' : 'Connect'}</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
            <p className="mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg">{subheading}</p>
            {icons ? (
              <div className="flex items-center justify-center gap-4">
                <AppLink
                  href="https://www.linkedin.com/in/jia-sheng-yeap-224277143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  <BsLinkedin className="h-5 w-5" />
                  LinkedIn
                </AppLink>
              </div>
            ) : null}
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{cta}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
