import '../styles/globals.css';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

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
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
