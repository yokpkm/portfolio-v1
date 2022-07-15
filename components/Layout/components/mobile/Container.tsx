import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 120px auto;
  max-width: 991px;
  min-width: 320px;
`;

const WrapperContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

interface Props {
  children: any;
}

export const ContainerMobile: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <StyledContainer>{children}</StyledContainer>
      </WrapperContainer>
    </>
  );
};
