import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { StyledModal } from "../../../../../components/Modal";
import { CloseCircleFilled } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { TextHeader, TextModal } from "../../../../../components/Text";
import { StyledTagDesign } from "../../../../../components/Tag";
import { ColorToneMeaning } from "./ColorToneMeaning";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const LogoDesignModal: React.FC<Props> = ({ visible, setVisible }) => {
  const { xs, sm, md } = useBreakpoint();

  return (
    <>
      <StyledModal
        visible={visible}
        onCancel={() => setVisible(false)}
        width={"100%"}
        footer={null}
        closeIcon={<CloseCircleFilled />}
      >
        <Row justify="center" style={{ marginBottom: 48 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            {(xs || sm) && !md ? (
              <>
                <Row align="middle">
                  <TextHeader>Coffee Shop Logo Design</TextHeader>
                </Row>
                <Row
                  align="middle"
                  gutter={8}
                  style={{ marginTop: 8, marginBottom: 40 }}
                >
                  <Col>
                    <StyledTagDesign>Logo Design</StyledTagDesign>
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
                    <TextHeader>Coffee Shop Logo Design</TextHeader>
                  </Col>
                  <Col>
                    <StyledTagDesign>Logo Design</StyledTagDesign>
                  </Col>
                </Row>
              </>
            )}
            <Row gutter={[0, 32]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard09.jpg"
                    preview={false}
                    style={{ borderRadius: 8 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The coffe shop name is CUPFÉ,</TextModal>
                </Row>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    which the concept offers coffee and drinking buffet.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Col span={24}>
                    <ColorToneMeaning />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    I designed this logo by Adobe Illustrator.
                  </TextModal>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
