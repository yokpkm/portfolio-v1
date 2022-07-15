import { Card } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

export const StyledCard: any = styled(Card)`
  &&& .ant-card {
    border-radius: 8px;
    border: 1px solid ${(props: PropsTheme) => props.theme.lineColor.default};
  }

  .ant-card-cover img {
    border-radius: 0px !important;
  }

  .ant-card-body {
    background: ${(props: PropsTheme) => props.theme.backgroundColors.default};
    padding: 32px 0px 24px 0px;
  }
`;
