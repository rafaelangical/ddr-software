import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    max-width: 100%;
    margin:0 auto;
    padding: 0;
  }

  body{
    min-height:100%;
    padding: 1rem;
    margin-top:0;
    font-family:Verdana;
  }
`;

export default GlobalStyles;
