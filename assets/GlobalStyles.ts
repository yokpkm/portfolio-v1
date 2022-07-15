import styled, { createGlobalStyle } from "styled-components";
// import "@fontsource/open-sans";
import { PropsTheme } from "../theme";

export const GlobalStyle = createGlobalStyle`
 body {
    background-color: ${(props: PropsTheme) =>
      props.theme.backgroundColors.default};
    margin: 0px ;
    overflow-x: hidden;
    padding: 0; 
  }

  html {
    height: unset ;
  }
`;

// export const FontFace = styled.div`
//   @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
// `;
