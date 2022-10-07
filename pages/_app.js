import '../styles/globals.css';

import { ThemeProvider, DefaultTheme } from 'styled-components';

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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
