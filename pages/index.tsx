import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/GlobalStyles";
import { MainLayout } from "../components/Layout";
import { NavbarDesktop } from "../components/Layout/components/desktop/Navbar";
import { NavbarMobile } from "../components/Layout/components/mobile/Navbar";
import { LoadingSession } from "../components/Loader";
import AllSection from "../sections";
import styles from "../styles/Home.module.css";
import { darkTheme, lightTheme } from "../theme";
import { ThemeType } from "../utils/constants";

const AppPage = () => {
  const { xs, sm, md, lg } = useBreakpoint();
  const [theme, setTheme] = useState(ThemeType.LIGHT);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      animateScroll.scrollToTop();
    }, 4000);
  }, []);

  const themeToggle = () => {
    theme === ThemeType.LIGHT
      ? setTheme(ThemeType.DARK)
      : setTheme(ThemeType.LIGHT);
  };

  return (
    <>
      <ConfigProvider>
        <ThemeProvider
          theme={theme === ThemeType.LIGHT ? lightTheme : darkTheme}
        >
          <GlobalStyle />
          {/* <FontFace> */}
          {loading ? (
            <LoadingSession />
          ) : (
            <>
              {(xs || sm || md) && !lg ? (
                <NavbarMobile themeToggle={() => themeToggle()} theme={theme} />
              ) : (
                <NavbarDesktop
                  themeToggle={() => themeToggle()}
                  theme={theme}
                />
              )}
              <MainLayout>
                <AllSection />
              </MainLayout>
            </>
          )}
          {/* </FontFace> */}
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default AppPage;
