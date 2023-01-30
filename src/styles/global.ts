import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  html {
      font-size: 62.5%;
      
    }

  html,
  body * {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.family};
  }



  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
