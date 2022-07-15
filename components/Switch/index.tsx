import { Switch } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

interface IStyledSwitch {
  $activeColor: string;
  $inActiveColor: string;
}

export const StyledSwitch: any = styled(Switch).attrs(
  (props: IStyledSwitch & PropsTheme) => ({
    $inActiveColor: props?.$inActiveColor || props.theme.switchColors.inactive,
    $activeColor: props?.$activeColor || props.theme.switchColors.active,
  })
)`
  background: ${(props) => props.$inActiveColor};
  &.ant-switch-checked {
    background: ${(props) => props.$activeColor};
  }

  && {
    height: 24px !important;
  }

  .ant-switch-handle {
    top: 3px;
  }

  .ant-image {
    align-items: center;
    display: flex;
  }
`;
