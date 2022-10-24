import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#257676',
    secondary: '#fbf3e0',
    green: '#2d8e8e',
    gold: '#efc33c',
    dark: '#2F4858',
  },
  fonts: {
    primary: "'Abhaya Libre', serif",
    secondary: "'Roboto', sans-serif",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='../public/assets/logo.webp' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
