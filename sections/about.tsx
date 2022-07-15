import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { Link } from "react-scroll";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { DividerSection } from "../components/Divider";
import { TextBody, TextDescription, TextHeader } from "../components/Text";
import { animateScroll } from "react-scroll";

export const AboutSection: React.FC = () => {
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row justify="center">
          <Col span={24}>
            <Row
              justify="start"
              style={
                (xs || sm || md) && !lg
                  ? { marginTop: 0, marginBottom: 48 }
                  : { marginTop: 0, marginBottom: 48 }
              }
            >
              <DividerSection orientation="left">
                <TextHeader>ABOUT</TextHeader>
              </DividerSection>
              <TextDescription>
                Hello! I'm Yok Premkamon, a UX/UI Designer.
              </TextDescription>
            </Row>

            <Row justify="start">
              <TextBody>
                I'm a UX/UI Designer. My purpose is design useful products for
                users.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 6 }}>
              <TextBody>
                I've experience in front-end development on website and mobile
                application.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 6 }}>
              <TextBody>
                So, I would like to improve my skills for provide a good user
                experience.
              </TextBody>
            </Row>

            {xs || !sm ? (
              <>
                <Row justify="start" gutter={[16, 8]} style={{ marginTop: 40 }}>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Figma</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Adobe XD</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Styled Components</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>React Typescript</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>React Native</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>MongoDB</li>
                    </TextDescription>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row justify="start" gutter={16} style={{ marginTop: 40 }}>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Figma</li>
                    </TextDescription>
                  </Col>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Adobe XD</li>
                    </TextDescription>
                  </Col>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Styled Components</li>
                    </TextDescription>
                  </Col>
                </Row>
                <Row justify="start" gutter={16} style={{ marginTop: 8 }}>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>React Typescript</li>
                    </TextDescription>
                  </Col>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>React Native</li>
                    </TextDescription>
                  </Col>
                  <Col sm={7} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>MongoDB</li>
                    </TextDescription>
                  </Col>
                </Row>
              </>
            )}

            <Row gutter={16} justify="start" style={{ marginTop: 48 }}>
              <Col>
                <a href="/PremkamonResume.pdf" target="_blank">
                  <ButtonPrimary>View my resume</ButtonPrimary>
                </a>
              </Col>
              {xs && !sm ? (
                <Col span={24} style={{ marginTop: 16 }}>
                  <Link to="contact" smooth={true} duration={1000} offset={0}>
                    <ButtonSecondary>Get in touch</ButtonSecondary>
                  </Link>
                </Col>
              ) : (
                <Col>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={1000}
                    onClick={() => animateScroll.scrollToBottom}
                  >
                    <ButtonSecondary>Get in touch</ButtonSecondary>
                  </Link>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};
