import { createGlobalStyle } from "styled-components";
import { PropsTheme } from "../theme";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans';
    background-color: ${(props: PropsTheme) =>
      props.theme.backgroundColors.default};
    margin: 0 ;
    padding: 0; 
    overflow-x: hidden;
  }
  
  html {
    height: unset ;
  }
`;
