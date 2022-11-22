import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';

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
      <GoogleAnalytics trackPageViews />
      <Head>
        <meta
          name='google-site-verification'
          content='eTvl94KTN6CVkVMX_dD6hOqWSQLv_dNencmVmWoB4O4'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='../public/assets/logo.webp' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='google-site-verification'
          content='eTvl94KTN6CVkVMX_dD6hOqWSQLv_dNencmVmWoB4O4'
        />
        <title>La Table de La Bruyère - Traiteur</title>
        <meta
          property='og:image'
          content='https://www.maximekerlidou.fr/photos/labruyere/guillaume.webp'
        />

        <meta
          name='description'
          content='Faites appel à un traiteur d’exception, pour un évènement inoubliable. La Table de La Bruyère, Traiteur évenementiel, Chef à domicile, cours de cuisine, mariages, baptèmes, séminaires, cours de cuisine, à Valenciennes, Wargnies, dans le Valenciennois et l’Avesnois'
        />
        <meta property='og:url' content='https://www.latabledelabruyere.com' />

        <meta property='url' content='https://www.latabledelabruyere.com' />
        <meta property='og:title' content='La Table de La Bruyère - Traiteur' />
        <meta property='og:type' content='video.movie' />

        <meta
          property='video'
          content='https://www.maximekerlidou.fr/videos/bruyere.mp4'
        />
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
