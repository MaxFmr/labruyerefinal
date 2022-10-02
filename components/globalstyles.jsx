import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color:${({ theme }) => theme.colors.primary} ;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-family:  ${({ theme }) => theme.fonts.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;}

  /* * {
    @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap');  

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


  } */
`;

export default GlobalStyle;
