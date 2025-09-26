import LazyImage from '../LazyImage';
import Reveal from '../common/Reveal';

const About = ({ jp = false }: { jp?: boolean }) => {
  const heading = jp ? '人を中心にしたデザイン哲学。' : 'A human-first design philosophy.';
  const intro = jp
    ? [
        'SteelcaseでUI/UXデザイナーとして働き、ユーザー体験とブランドの物語を統合しています。',
        '細部へのこだわりと大胆なUI選択を組み合わせ、常に学びながら自分のクラフトを磨いています。',
      ]
    : [
        'UI/UX designer at Steelcase, blending user experience strategy with brand storytelling.',
        'I obsess over details, embrace bold interface choices, and iterate relentlessly to push my craft forward.',
      ];

  const focusItems = jp
    ? ['デザインシステム', 'インタラクション設計', 'フロントエンドエンジニアリング']
    : ['Design systems', 'Interaction design', 'Frontend engineering'];

  const highlightCards = jp
    ? [
        {
          title: 'リサーチから実装まで',
          description: 'リサーチ、コンセプト、デザイン、プロトタイピング、開発を通じて製品を一貫して導きます。',
        },
        {
          title: '多様なプラットフォーム',
          description: 'Shopifyやネイティブアプリなど、複数のプラットフォームに合わせて体験を最適化します。',
        },
        {
          title: 'チームとの共同制作',
          description: 'エンジニア、プロダクト、マーケティングと協力し、ブランド全体の一貫性を保ちます。',
        },
      ]
    : [
        {
          title: 'From research to launch',
          description: 'Guiding products end-to-end across discovery, design, prototyping, and implementation.',
        },
        {
          title: 'Multi-platform thinking',
          description: 'Crafting responsive experiences for Shopify ecosystems, native apps, and bespoke interfaces.',
        },
        {
          title: 'Collaborative build',
          description: 'Partnering with engineering, product, and marketing to maintain cohesive brand narratives.',
        },
      ];

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <Reveal animation="fade-right" className="space-y-8">
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">{jp ? '紹介' : 'About'}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
          {intro.map((paragraph, index) => (
            <p key={`intro-${index}`} className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              {paragraph}
            </p>
          ))}

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{jp ? 'フォーカス' : 'Focus Areas'}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute inset-0 rounded-[3rem] border border-white/5 bg-white/5 blur-2xl" />
          <div className="relative grid gap-6 rounded-[2.5rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
            <Reveal animation="zoom-in" className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6">
              <LazyImage
                src="/gif/PhoneGIF.gif"
                alt="Animated interface mockups"
                className="mx-auto w-full max-w-xs object-contain"
              />
            </Reveal>

            <div className="grid gap-4">
              {highlightCards.map((card) => (
                <Reveal
                  key={card.title}
                  animation="fade-up"
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{card.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
