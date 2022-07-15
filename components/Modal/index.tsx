import { Modal } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

interface Props {
  padding: string;
}

export const StyledModal = styled(Modal).attrs((props: Props) => {
  return {
    padding: props.padding,
  };
})`
  &.ant-modal {
    max-width: 100%;
    margin: 0;
    padding-bottom: 0;
    top: 32px;
    position: fixed;
  }

  .ant-modal-body {
    padding: ${(props) => props?.padding || "48px 0px"};
  }

  .ant-modal-close {
    position: fixed;
    top: auto;
  }

  .ant-modal-close-x {
    font-size: 20px;
    color: ${(props: PropsTheme) => props.theme.closeColor.default};

    :hover,
    :focus,
    :active {
      color: ${(props: PropsTheme) => props.theme.closeColor.hover};
    }
  }

  .ant-modal-content {
    position: fixed;
    height: 100%;
    overflow-y: scroll;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: ${(props: PropsTheme) =>
      props.theme.backgroundColors.default};
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
