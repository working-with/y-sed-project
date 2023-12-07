import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NanumSquareNeo-Lt';
    src: url('/assets/font/NanumSquareNeoOTF-Lt.otf') format('opentype');
    font-weight: 350;
  }

  @font-face {
    font-family: 'NanumSquareNeoOTF-Rg';
    src: url('/assets/font/NanumSquareNeoOTF-Rg.otf') format('opentype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'NanumSquareNeoOTF-Bd';
    src: url('/assets/font/NanumSquareNeoOTF-Bd.otf') format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'NanumSquareNeoOTF-Eb';
    src: url('/assets/font/NanumSquareNeoOTF-Eb.otf') format('opentype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'NanumSquareNeoOTF-Hv';
    src: url('/assets/font/NanumSquareNeoOTF-Hv.otf') format('opentype');
    font-weight: 900;
  }    

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeoOTF-Rg';
  }
    
  body {
    font-family: 'NanumSquareNeoOTF-Rg', sans-serif;
    color: ${({ theme }) => theme.PALETTE.black};
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
    
  input, textarea {
    font-family: inherit;
  }

  ul > li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyles;
