type FooterProps = {
  jp?: boolean;
};

const Footer = ({ jp = false }: FooterProps) => {
  const message = jp
    ? '著作権© Jia Sheng Yeap. すべての権利を保有。'
    : 'Copyright © Jia Sheng Yeap. All rights reserved.';

  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-base font-semibold tracking-wide text-zinc-200">Jia Sheng Yeap</p>
          <p className="mt-1 max-w-xl text-zinc-400">
            {jp
              ? 'デジタル製品、ブランド体験、シームレスなUI/UXをデザインし、開発します。'
              : 'Designing and developing immersive digital products, brand stories, and seamless UI/UX experiences.'}
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{message}</p>
      </div>
    </footer>
  );
};

export default Footer;
