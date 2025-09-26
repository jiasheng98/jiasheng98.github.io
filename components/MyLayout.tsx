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
      <Header overlay={overlay} jp={jp} />
      {children}
      <Footer jp={jp} />
    </>
  );
};

export default Layout;
