import type { AppProps } from 'next/app';
import ThemeProvider from '../components/common/ThemeProvider';
import '../styles/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
