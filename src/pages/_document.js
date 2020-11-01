import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <meta name="author" content="Fehux.com" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


// import Document, { Html, Head, Main, NextScript } from "next/document";

// export default class MyDocument extends Document {
//   // we have added a new function to return the JSON-LD
//   addJSONLD() {
//     return {
//       __html: `{
//           "@context" : "http://schema.org",
//           "@type" : "LocalBusiness",
//           "name" : "Fehux",
//           "telephone" : "+603 56115890",
//           "email" : "hello@fehux.com",
//           "sameAs" : [
//             "https://www.facebook.com/fehuxsoftwaredevelopment/",
//             "https://www.linkedin.com/company/14522395/"
//             ],
//           "address" : {
//             "@type" : "PostalAddress",
//             "streetAddress" : "E-07-03, Sunway GEO Flexi Suites, Jalan Lagoon Selatan",
//             "addressLocality" : "Subang Jaya, Selangor",
//             "postalCode" : "47500"
//           },
//           "headline": "Fehux • The right IT solution, tailored for your business.",
//           "mainEntityOfPage": {
//             "@type": "WebPage",
//             "@id": "https://www.fehux.com"
//           },
//         "description": "Fehux • The right IT solution, tailored for your business.",
//       }`
//     };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta charSet="utf-8" />
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
//           />
//           <meta name="author" content="Fehux.com" />
//           <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="57x57"
//             href="/images/apple-touch-icon-57x57.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="114x114"
//             href="/images/apple-touch-icon-114x114.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="72x72"
//             href="/images/apple-touch-icon-72x72.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="144x144"
//             href="/images/apple-touch-icon-144x144.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="60x60"
//             href="/images/apple-touch-icon-60x60.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="120x120"
//             href="/images/apple-touch-icon-120x120.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="76x76"
//             href="/images/apple-touch-icon-76x76.png"
//           />
//           <link
//             rel="apple-touch-icon-precomposed"
//             sizes="152x152"
//             href="/images/apple-touch-icon-152x152.png"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             href="/images/favicon-196x196.png"
//             sizes="196x196"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             href="/images/favicon-96x96.png"
//             sizes="96x96"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             href="/images/favicon-32x32.png"
//             sizes="32x32"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             href="/images/favicon-16x16.png"
//             sizes="16x16"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             href="/images/favicon-128.png"
//             sizes="128x128"
//           />
//           <meta name="application-name" content="Fehux" />
//           <meta name="msapplication-TileColor" content="#FFFFFF" />
//           <meta name="msapplication-TileImage" content="mstile-144x144.png" />
//           <meta
//             name="msapplication-square70x70logo"
//             content="/images/mstile-70x70.png"
//           />
//           <meta
//             name="msapplication-square150x150logo"
//             content="/images/mstile-150x150.png"
//           />
//           <meta
//             name="msapplication-wide310x150logo"
//             content="/images/mstile-310x150.png"
//           />
//           <meta
//             name="msapplication-square310x310logo"
//             content="/images/mstile-310x310.png"
//           />

//           <meta
//             key="og:url"
//             property="og:url"
//             content="https://www.fehux.com"
//           />
//           <meta key="og:type" property="og:type" content="website" />
//           <meta
//             key="og:title"
//             property="og:title"
//             content="Fehux • The right IT solution, tailored for your business."
//           />
//           <meta
//             key="og:description"
//             property="og:description"
//             content="Professional website and mobile app development company. At Fehux, we are commited to deliver stunning digital products cater to your needs."
//           />
//           <meta
//             key="og:image"
//             property="og:image"
//             content="https://firebasestorage.googleapis.com/v0/b/fehux-257400.appspot.com/o/fehux-logo.png?alt=media&token=5b4ecd6c-4400-4b9d-a455-3beea1473f1d"
//           />
//           <meta key="og:image:width" property="og:image:width" content={1229} />
//           <meta
//             key="og:image:height"
//             property="og:image:height"
//             content={1229}
//           />
//           <meta key="og:locale" property="og:locale" content="en_IE" />

//           <meta
//             name="norton-safeweb-site-verification"
//             content="ipwiupl1aab5-cq8r9is1rj65rclly6hs8h23hv1z0eghtgmtbyjij1rb761vv45y-piz028f5b5iayrn244uiygo36vmfdhz04mds7sh1t1czt0a6vs7se97ne6-1ew"
//           />

//           {/* <!-- Chrome, Firefox OS and Opera --> */}
//           <meta name="theme-color" content="#4285f4" />
//           {/* <!-- Windows Phone --> */}
//           <meta name="msapplication-navbutton-color" content="#4285f4" />
//           {/* <!-- iOS Safari --> */}
//           <meta
//             name="apple-mobile-web-app-status-bar-style"
//             content="#4285f4"
//           />

//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: `{ "@context":"http://schema.org","@type":"LocalBusiness","name":"Fehux","telephone":"+603 56115890","email":"hello@fehux.com","sameAs":["https://www.facebook.com/fehuxsoftwaredevelopment/","https://www.linkedin.com/company/14522395/"],"address":{"@type":"PostalAddress","streetAddress":"E-07-03, Sunway GEO Flexi Suites, Jalan Lagoon Selatan","addressLocality":"Subang Jaya, Selangor","postalCode":"47500"},"headline":"Fehux • The right IT solution, tailored for your business.","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.fehux.com"},"description":"Fehux • The right IT solution, tailored for your business." }`
//             }}
//           />

//           <script
//             dangerouslySetInnerHTML={{
//               __html: `!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '2429686367136114'); fbq('track', 'PageView');`
//             }}
//           />
//           <noscript
//             dangerouslySetInnerHTML={{
//               __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2429686367136114&ev=PageView&noscript=1" />`
//             }}
//           />

//           {/* <!-- Global site tag (gtag.js) - Google Ads: 700539208 --> */}
//           <script
//             async
//             src="https://www.googletagmanager.com/gtag/js?id=AW-700539208"
//           ></script>
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-700539208');`
//             }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
