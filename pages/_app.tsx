import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../components/styles/header.css';
import '../components/styles/footer.css';
import '../components/styles/about.css';
import '../components/styles/contact.css';
import '../components/styles/landing-section.css';
import '../components/styles/work-section.css';
import '../components/styles/project-detail.css';
import '../pages/styles/portfolio-list.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
