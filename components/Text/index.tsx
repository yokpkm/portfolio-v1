import Text from "antd/lib/typography/Text";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

export const TextHeader = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.header};
  font-weight: 700;
  color: ${(props: PropsTheme) => props.theme.fontColor.default};
  letter-spacing: 0.03em;
  margin-bottom: 0;
`;

export const TextTitle = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.title};
  font-weight: 700;
  color: ${(props: PropsTheme) => props.theme.fontColor.default};
  letter-spacing: 0.03em;
  margin-bottom: 0;
`;

export const TextMenu = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.menu};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.default};
  letter-spacing: 0.04em;
  margin-bottom: 0;

  :hover,
  :focus,
  :active {
    color: ${(props: PropsTheme) => props.theme.fontColor.link};
  }
`;

export const TextLink = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.body};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.medium};
  letter-spacing: 0.04em;
  margin-bottom: 0;

  :hover,
  :focus,
  :active {
    color: ${(props: PropsTheme) => props.theme.fontColor.link};
    cursor: pointer;
  }
`;

export const TextBody = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.body};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.medium};
  letter-spacing: 0.04em;
  margin-bottom: 0;
`;

export const TextContent = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.content};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.medium};
  letter-spacing: 0.04em;
  margin-bottom: 0;
  line-height: 22px;
`;

export const TextDescription = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.description};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.medium};
  letter-spacing: 0.04em;
  margin-bottom: 0;
`;

export const TextModal = styled(Text)`
  font-size: ${(props: PropsTheme) => props.theme.fontSize.menu};
  font-weight: 400;
  color: ${(props: PropsTheme) => props.theme.fontColor.medium};
  letter-spacing: 0.04em;
  margin-bottom: 0;
  line-height: 26px;
`;
