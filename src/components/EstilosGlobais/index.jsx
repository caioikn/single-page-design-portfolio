import { createGlobalStyle } from 'styled-components';

export const EstilosGlobais = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: #FFF7F0;  
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    height: 100vh;
    width: 100%;
  }
`;
