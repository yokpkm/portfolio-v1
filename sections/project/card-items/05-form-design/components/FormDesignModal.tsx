import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { StyledModal } from "../../../../../components/Modal";
import { CloseCircleFilled } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { TextHeader, TextModal } from "../../../../../components/Text";
import { StyledTagDesign } from "../../../../../components/Tag";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const FormDesignModal: React.FC<Props> = ({ visible, setVisible }) => {
  const { xs, sm, md } = useBreakpoint();

  return (
    <>
      <StyledModal
        visible={visible}
        onCancel={() => setVisible(false)}
        width={"100%"}
        footer={null}
        closeIcon={<CloseCircleFilled />}
        destroyOnClose={true}
      >
        <Row justify="center" style={{ marginBottom: 48 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            {(xs || sm) && !md ? (
              <>
                <Row align="middle">
                  <TextHeader>Login / Register Form</TextHeader>
                </Row>
                <Row
                  align="middle"
                  gutter={8}
                  style={{ marginTop: 8, marginBottom: 40 }}
                >
                  <Col>
                    <StyledTagDesign>UI Design</StyledTagDesign>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row
                  justify="center"
                  align="middle"
                  gutter={8}
                  style={{ marginTop: 8, marginBottom: 40 }}
                >
                  <Col flex="auto">
                    <TextHeader>Login / Register Form</TextHeader>
                  </Col>
                  <Col>
                    <StyledTagDesign>UI Design</StyledTagDesign>
                  </Col>
                </Row>
              </>
            )}
            <Row gutter={[0, 32]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard05.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>My pattern concept is the greatness.</TextModal>
                  <TextModal>
                    I designed by drawing and watercolor painting.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/05-travel/img01.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/05-travel/img02.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/05-travel/img03.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
