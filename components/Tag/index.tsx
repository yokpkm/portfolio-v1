import { Tag } from "antd";
import styled from "styled-components";
import { PropsTheme } from "../../theme";

export const StyledTag = styled(Tag)`
  margin-right: 0;
  background: transparent;
`;

export const StyledTagDesign = styled(StyledTag)`
  &.ant-tag {
    border: 1px solid ${(props: PropsTheme) => props.theme.tagColors.design};
    border-radius: 4px;
    color: ${(props: PropsTheme) => props.theme.tagColors.design};
    font-weight: 700;
  }
`;

export const StyledTagCoding = styled(StyledTag)`
  &.ant-tag {
    border: 1px solid ${(props: PropsTheme) => props.theme.tagColors.coding};
    border-radius: 4px;
    color: ${(props: PropsTheme) => props.theme.tagColors.coding};
    font-weight: 700;
  }
`;

export const StyledTagDatabase = styled(StyledTag)`
  &.ant-tag {
    border: 1px solid ${(props: PropsTheme) => props.theme.tagColors.database};
    border-radius: 4px;
    color: ${(props: PropsTheme) => props.theme.tagColors.database};
    font-weight: 700;
  }
`;
