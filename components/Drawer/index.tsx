import { Drawer } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${(props: PropsTheme) =>
      props.theme.backgroundColors.default};
  }

  .ant-drawer-content-wrapper {
    height: fit-content !important;
  }

  .ant-drawer-body {
    padding: 32px;
  }
`;
