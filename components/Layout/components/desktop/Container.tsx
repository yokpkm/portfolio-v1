import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 160px auto;
  max-width: 1920px;
  min-width: 240px;
`;

const WrapperContainer = styled.div`
  margin-left: calc(24% - 48px);
  margin-right: calc(24% - 48px);
`;

interface Props {
  children: any;
}

export const ContainerDesktop: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <StyledContainer>{children}</StyledContainer>
      </WrapperContainer>
    </>
  );
};
