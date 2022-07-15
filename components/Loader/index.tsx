import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const ContainerSession = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingSession = () => {
  return (
    <>
      <ContainerSession>
        <BounceLoader speedMultiplier={0.8} color={"#CCA300"} />
      </ContainerSession>
    </>
  );
};
