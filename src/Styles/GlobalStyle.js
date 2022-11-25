import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body {
       font-family: 'Lato', sans-serif;
       font-weight: 400;
       margin: 0;
       height: 100vh;
       background-color: #0a0a0a;
   }
   
   h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    color: #c4c4c4;
   }
   a {
    text-decoration: none;
   }
`;
