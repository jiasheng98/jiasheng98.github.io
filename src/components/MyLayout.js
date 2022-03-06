import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import {BrowserRouter, withRouter} from 'react-router-dom'

export default function Layout({
  children,
  title = 'Jia Sheng Yeap',
  description,
  keywords,
  ld_json,
  seyebot
}) {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(ld_json)}}
        />
      </Head>
      <Header seyebot={seyebot}/>
      {children}
      <Footer />
    </>
  );
}
