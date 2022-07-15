import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { StyledModal } from "../../../../../components/Modal";
import { CloseCircleFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import { TextBody, TextHeader } from "../../../../../components/Text";
import {
  StyledTagCoding,
  StyledTagDesign,
} from "../../../../../components/Tag";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const OrderPageModal: React.FC<Props> = ({ visible, setVisible }) => {
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <StyledModal
        visible={visible}
        onCancel={() => setVisible(false)}
        width={"100%"}
        footer={null}
        closeIcon={<CloseCircleFilled />}
        padding={(xs || sm || md) && !lg ? "48px 24px" : "40px 200px"}
      >
        {(xs || sm || md) && !lg ? (
          <>
            <Row align="middle">
              <TextHeader>Order Page</TextHeader>
            </Row>
            <Row
              align="middle"
              gutter={8}
              style={{ marginTop: 16, marginBottom: 48 }}
            >
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col>
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row
              justify="center"
              align="middle"
              gutter={8}
              style={{ marginTop: 16, marginBottom: 48 }}
            >
              <Col flex="auto">
                <TextHeader>Order Page</TextHeader>
              </Col>
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col>
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
            </Row>
          </>
        )}
        <Row style={{ overflow: "scroll", maxHeight: "100vh" }}>
          <Col span={24}>
            <Row justify="center">
              <TextBody>Image</TextBody>
            </Row>
            <Row justify="center">
              <TextBody>Text 1</TextBody>
            </Row>
            <Row justify="center">
              <TextBody>Text 2</TextBody>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
