import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="JiaSheng" />
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <meta key="og:url" property="og:url" content="https://jiasheng98.github.io/" />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:title" property="og:title" content="Jia Sheng Yeap" />
          <meta key="og:description" property="og:description" content="Creative Lead, UI Designer and Developer" />
          <meta key="og:image" property="og:image" content="https://i.ibb.co/wc8j53G/logo-website-min.png" />
          <meta key="og:image:width" property="og:image:width" content="1229" />
          <meta key="og:image:height" property="og:image:height" content="1229" />
          <meta key="og:locale" property="og:locale" content="en_IE" />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
