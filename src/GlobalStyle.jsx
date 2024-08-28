import { createGlobalStyle } from "styled-components";

// Função para determinar o caminho da fonte com base no ambiente
const getFontUrl = () => {
  if (import.meta.env.VITE_ENV && import.meta.env.VITE_ENV === "PROD") {
    return "https://drairmarottschaefer.com.br/aplicacao/fonts/giarekdemoversionregular-d9za6.ttf";
  }
  return "/fonts/giarekdemoversionregular-d9za6.ttf";
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "giarek";
    src: local("giarek"), url(${getFontUrl()}) format("truetype");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }


  body {
color: white;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
