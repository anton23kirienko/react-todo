import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: rgb(244, 244, 244);
    --color-lightgray: rgb(245, 245, 245);
    --color-gray: rgb(177, 177, 177);
    --color-darkgray: rgb(47, 47, 47);
    --color-darkgray-alpha: rgba(47, 47, 47, 0.3);
    --color-green: rgb(4, 142, 0);
    --color-red: rgb(175, 47, 47);
    --color-red-alpha: rgba(175, 47, 47, 0.15);
    --color-black: rgb(12, 12, 12);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    user-select: none;
  }

  body {
    height: 100vh;
    font-family: Arial;
    font-size: 10px;
    background-color: var(--color-lightgray);
  }
`;
