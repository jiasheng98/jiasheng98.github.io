import 'aos/dist/aos.css'; //index.js
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/fonts/slick.ttf';
// import 'slick-carousel/slick/fonts/slick.woff';
import stylesheet from '../../public/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const JiaSheng = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default JiaSheng;

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
