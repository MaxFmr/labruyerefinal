import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';

const theme = {
  colors: {
    primary: '#257676',
    secondary: '#fefff2',
    green: '#2d8e8e',
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
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
