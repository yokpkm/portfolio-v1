import { lightTheme } from "./light-theme";
import { darkTheme } from "./dark-theme";

export interface PropsTheme {
  theme: LightTheme | DarkTheme;
}

export interface LightTheme {
  logo: {
    default: string;
  };
  backgroundColors: {
    default: string;
    card: string;
  };
  tagColors: {
    design: string;
    coding: string;
    database: string;
  };
  buttonColors: {
    font: string;
    background: string;
  };
  switchColors: {
    active: string;
    inactive: string;
  };
  fontSize: {
    description: string;
    content: string;
    body: string;
    menu: string;
    title: string;
    header: string;
  };
  fontColor: {
    default: string;
    medium: string;
    light: string;
    link: string;
  };
  lineColor: {
    default: string;
  };
  closeColor: {
    default: string;
    hover: string;
  };
  cardShadow: {
    default: string;
  };
}

export interface DarkTheme {
  logo: {
    default: string;
  };
  backgroundColors: {
    default: string;
    card: string;
  };
  tagColors: {
    design: string;
    coding: string;
    database: string;
  };
  buttonColors: {
    font: string;
    background: string;
  };
  switchColors: {
    active: string;
    inactive: string;
  };
  fontSize: {
    description: string;
    content: string;
    body: string;
    menu: string;
    title: string;
    header: string;
  };
  fontColor: {
    default: string;
    medium: string;
    light: string;
    link: string;
  };
  lineColor: {
    default: string;
  };
  closeColor: {
    default: string;
    hover: string;
  };
  cardShadow: {
    default: string;
  };
}

export { lightTheme, darkTheme };
