import Head from 'next/head';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ldJson?: unknown;
  overlay?: boolean;
  jp?: boolean;
};

const Layout = ({
  children,
  title = 'Jia Sheng Yeap | シェーン',
  description,
  keywords,
  ldJson,
  overlay = false,
  jp = false,
}: LayoutProps) => {
  const mainClasses = [
    'flex flex-1 flex-col',
    overlay ? 'pt-0' : 'pt-24 md:pt-28',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        {ldJson ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        ) : null}
      </Head>
      <div className="relative flex min-h-screen flex-col bg-night text-zinc-100">
        <Header overlay={overlay} jp={jp} />
        <main className={mainClasses}>{children}</main>
        <Footer jp={jp} />
      </div>
    </>
  );
};

export default Layout;
