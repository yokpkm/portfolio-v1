import { Button, Col, Image, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { PropsTheme } from "../../../../theme";
import { StyledSwitch } from "../../../Switch";
import { TextMenu } from "../../../Text";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import { ThemeType } from "../../../../utils/constants";

const WrapperNavbar = styled.div`
  padding: 12px 80px 12px 80px;
  background-color: ${(props: PropsTheme) =>
    props.theme.backgroundColors.default};
  z-index: 10;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

interface Props {
  themeToggle: () => void;
  theme: ThemeType;
}

export const NavbarDesktop: React.FC<Props> = ({ themeToggle, theme }) => {
  return (
    <WrapperNavbar>
      <Row justify="center" align="middle">
        <Col flex="auto">
          <Button
            icon={
              theme === ThemeType.LIGHT ? (
                <Image
                  width={40}
                  height={40}
                  src="/logo/normal_lightTheme.svg"
                  preview={false}
                  style={{ display: "flex" }}
                />
              ) : (
                <Image
                  width={40}
                  height={40}
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
          <Row gutter={[40, 0]} align="middle">
            <Col>
              <Link to="about" smooth={true} duration={1000} offset={-160}>
                <TextMenu>About</TextMenu>
              </Link>
            </Col>
            <Col>
              <Link to="project" smooth={true} duration={1000} offset={-160}>
                <TextMenu>Project</TextMenu>
              </Link>
            </Col>
            <Col>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                onClick={() => animateScroll.scrollToBottom}
              >
                <TextMenu>Contact</TextMenu>
              </Link>
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
          </Row>
        </Col>
      </Row>
    </WrapperNavbar>
  );
};
