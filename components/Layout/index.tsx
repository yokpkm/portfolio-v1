import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { ContainerDesktop } from "./components/desktop/Container";
import { ContainerMobile } from "./components/mobile/Container";

interface Props {
  children: any;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      {(xs || sm || md) && !lg ? (
        <ContainerMobile>{children}</ContainerMobile>
      ) : (
        <ContainerDesktop>{children}</ContainerDesktop>
      )}
    </>
  );
};
