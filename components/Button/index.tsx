import { Button } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

export const ButtonTheme = styled(Button)`
  && {
    padding: 0px;
    width: 32px;
    height: 32px;
  }

  img {
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
`;

export const ButtonPrimary = styled(Button)`
  && {
    border: none;
    height: 40px;
    padding: 0px 24px;
    background-color: ${(props: PropsTheme) =>
      props.theme.buttonColors.background};
    border-radius: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props: PropsTheme) => props.theme.fontSize.body};
    font-weight: 600;
    color: ${(props: PropsTheme) => props.theme.buttonColors.font};
    letter-spacing: 0.08em;
  }

  :hover,
  :focus,
  :active {
    background-color: ${(props: PropsTheme) => props.theme.fontColor.link};
  }
`;

export const ButtonSecondary = styled(Button)`
  && {
    border: 2px solid ${(props: PropsTheme) => props.theme.fontColor.default};
    height: 40px;
    padding: 0px 24px;
    background-color: ${(props: PropsTheme) =>
      props.theme.backgroundColors.default};
    border-radius: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props: PropsTheme) => props.theme.fontSize.body};
    font-weight: 600;
    color: ${(props: PropsTheme) => props.theme.fontColor.default};
    letter-spacing: 0.08em;
  }

  :hover,
  :focus,
  :active {
    border: 2px solid ${(props: PropsTheme) => props.theme.fontColor.link};
    color: ${(props: PropsTheme) => props.theme.fontColor.link};
  }
`;

export const ButtonMore = styled(Button)`
  && {
    border: none;
    height: 36px;
    padding: 0px 16px;
    background-color: ${(props: PropsTheme) =>
      props.theme.buttonColors.background};
    border-radius: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props: PropsTheme) => props.theme.fontSize.description};
    font-weight: 600;
    color: ${(props: PropsTheme) => props.theme.buttonColors.font};
    letter-spacing: 0.04em;
  }

  :hover,
  :focus,
  :active {
    background-color: ${(props: PropsTheme) => props.theme.fontColor.link};
  }
`;

export const ButtonIcon = styled(Button)`
  color: ${(props: PropsTheme) => props.theme.fontColor.default};

  &&.ant-btn {
    padding: 0;
  }

  svg {
    width: 24px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  :hover,
  :focus,
  :active {
    color: ${(props: PropsTheme) => props.theme.fontColor.link};
  }
`;
