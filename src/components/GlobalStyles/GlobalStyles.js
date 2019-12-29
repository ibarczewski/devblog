import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: #FFFFFF;
    color: '#363537';

    @media (prefers-color-scheme: dark) {
      background: #363537;
      color: '#FAFAFA';
      transition: all 0.25s linear;
    }
  }`