import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/GlobalStyles";
import { MainLayout } from "../components/Layout";
import { NavbarDesktop } from "../components/Layout/components/desktop/Navbar";
import { NavbarMobile } from "../components/Layout/components/mobile/Navbar";
import { LoadingSession } from "../components/Loader";
import AllSection from "../sections";
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
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default AppPage;
