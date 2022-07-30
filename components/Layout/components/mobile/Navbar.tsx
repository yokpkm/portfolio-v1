import { Button, Col, Image, Row } from "antd";
import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { DarkTheme, LightTheme, PropsTheme } from "../../../../theme";
import { TextMenu } from "../../../Text";
import { StyledDrawer } from "../../../Drawer";
import { DividerMenu } from "../../../Divider";
import { StyledSwitch } from "../../../Switch";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { ThemeType } from "../../../../utils/constants";
import { ButtonIcon } from "../../../Button";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";

const WrapperNavbar = styled.div`
  padding: 12px 16px 12px 16px;
  background-color: ${(props: PropsTheme) =>
    props.theme.backgroundColors.default};
  z-index: 10;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

interface Props {
  themeToggle: () => void;
  theme: ThemeType;
}

export const NavbarMobile: React.FC<Props> = ({ themeToggle, theme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <WrapperNavbar>
        <Row gutter={[8, 0]} justify="center" align="middle">
          <Col flex="auto">
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={36}
                    height={36}
                    src="/logo/normal_lightTheme.svg"
                    preview={false}
                    style={{ display: "flex" }}
                  />
                ) : (
                  <Image
                    width={36}
                    height={36}
                    src="/logo/normal_darkTheme.svg"
                    preview={false}
                    style={{ display: "flex" }}
                  />
                )
              }
              type="text"
              onClick={() => animateScroll.scrollToTop()}
            />
          </Col>
          <Col>
            <StyledSwitch
              onClick={() => themeToggle()}
              checkedChildren={
                <Image
                  width={16}
                  height={16}
                  src="/icon/moon-white.svg"
                  preview={false}
                />
              }
              unCheckedChildren={
                <Image
                  width={16}
                  height={16}
                  src="/icon/moon-white.svg"
                  preview={false}
                />
              }
            />
          </Col>
          <Col>
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={24}
                    height={24}
                    src="/icon/menu-black.svg"
                    preview={false}
                    style={{ display: "flex" }}
                  />
                ) : (
                  <Image
                    width={24}
                    height={24}
                    src="/icon/menu-white.svg"
                    preview={false}
                    style={{ display: "flex" }}
                  />
                )
              }
              type="text"
              onClick={() => setShowMenu(true)}
              style={{ color: themeContext.logo.default }}
            />
          </Col>
        </Row>
      </WrapperNavbar>
      <StyledDrawer
        placement="top"
        visible={showMenu}
        closable={false}
        onClose={() => setShowMenu(false)}
      >
        <Row justify="center" style={{ marginBottom: 32 }}>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-120}
            onClick={() => setShowMenu(false)}
          >
            <TextMenu>About</TextMenu>
          </Link>
        </Row>
        <Row justify="center" style={{ marginBottom: 32 }}>
          <Link
            to="project"
            smooth={true}
            duration={1000}
            offset={-120}
            onClick={() => setShowMenu(false)}
          >
            <TextMenu>Project</TextMenu>
          </Link>
        </Row>
        <Row justify="center">
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={0}
            onClick={() => setShowMenu(false)}
          >
            <TextMenu>Contact</TextMenu>
          </Link>
        </Row>
        <DividerMenu />
        <Row justify="center" gutter={16} align="middle">
          <Col>
            <a
              target={"_blank"}
              href={"https://github.com/yokpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <GithubFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.instagram.com/junepiter26_"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <InstagramFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://wwww.facebook.com/yok.pkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <FacebookFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.linkedin.com/in/yok-premkamon-343362233"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <LinkedinFilled />
              </ButtonIcon>
            </a>
          </Col>
        </Row>
      </StyledDrawer>
    </>
  );
};
