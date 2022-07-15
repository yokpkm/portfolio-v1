import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import {
  TextBody,
  TextDescription,
  TextHeader,
  TextLink,
} from "../components/Text";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { DividerSection } from "../components/Divider";
import { ButtonIcon } from "../components/Button";

export const ContactSection: React.FC = () => {
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="contact">
        <Row justify="center">
          <Col span={24}>
            <Row
              justify="end"
              style={
                (xs || sm || md) && !lg
                  ? { marginTop: 120, marginBottom: 48 }
                  : { marginTop: 160, marginBottom: 48 }
              }
            >
              <DividerSection orientation="right">
                <TextHeader>CONTACT</TextHeader>
              </DividerSection>
              <TextDescription>
                My inbox is always open. I'll get back to you.
              </TextDescription>
            </Row>

            <Row justify="end">
              <a href="mailto:premkamon.work@gmail.com">
                <TextLink>Email: premkamon.work@gmail.com</TextLink>
              </a>
            </Row>
            <Row justify="end" style={{ marginTop: 6, marginBottom: 48 }}>
              <TextBody>Tel: 089-152-4017</TextBody>
            </Row>
            <Row justify="end" style={{ marginBottom: 8 }}>
              <TextBody>or find me on</TextBody>
            </Row>
            <Row justify="end" gutter={16} align="middle">
              <Col>
                <a target={"_blank"} href={"https://github.com/yokpkm"}>
                  <ButtonIcon type="link">
                    <GithubFilled />
                  </ButtonIcon>
                </a>
              </Col>
              <Col>
                <a
                  target={"_blank"}
                  href={"https://www.instagram.com/junepiter26_"}
                >
                  <ButtonIcon type="link">
                    <InstagramFilled />
                  </ButtonIcon>
                </a>
              </Col>
              <Col>
                <a target={"_blank"} href={"https://wwww.facebook.com/yok.pkm"}>
                  <ButtonIcon type="link">
                    <FacebookFilled />
                  </ButtonIcon>
                </a>
              </Col>
              <Col>
                <a
                  target={"_blank"}
                  href={"https://www.linkedin.com/in/yok-premkamon-343362233"}
                >
                  <ButtonIcon type="link">
                    <LinkedinFilled />
                  </ButtonIcon>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};
