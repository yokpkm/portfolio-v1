import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { StyledModal } from "../../../../../components/Modal";
import { CloseCircleFilled } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { TextHeader, TextModal } from "../../../../../components/Text";
import {
  StyledTagCoding,
  StyledTagDesign,
} from "../../../../../components/Tag";
import { ProductProcedures } from "./ProductProcedures";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductPageModal: React.FC<Props> = ({ visible, setVisible }) => {
  const { xs, sm } = useBreakpoint();

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
        <Row justify="center" style={{ marginBottom: 24 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            <Row align="middle" gutter={[8, 8]} style={{ marginBottom: 40 }}>
              <Col flex="auto">
                <TextHeader>Product Page</TextHeader>
              </Col>
              <Col>
                <Row gutter={[8, 16]}>
                  <Col>
                    <StyledTagDesign>UI Design</StyledTagDesign>
                  </Col>
                  <Col>
                    <StyledTagCoding>Coding</StyledTagCoding>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard08.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    This features for supporting inventory management.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <ProductProcedures />
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/08-product/img01.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The page that displays product details.</TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/08-product/img02.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The lists that all products are shown.</TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/08-product/img03.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>The product creating and updating form.</TextModal>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
};
