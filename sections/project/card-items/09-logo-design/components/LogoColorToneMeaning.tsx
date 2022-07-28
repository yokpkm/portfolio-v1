import { Col, Row } from "antd";
import styled from "styled-components";
import { TextModal } from "../../../../../components/Text";

export const ColorTone = styled.div`
  border-radius: 360px;
  width: 28px;
  height: 28px;
`;

export const LogoColorToneMeaning = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Row
          align="middle"
          justify="center"
          gutter={[16, 16]}
          style={{ marginBottom: 16 }}
        >
          <Col xs={7} sm={7} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="end" gutter={8}>
              <Col>
                <ColorTone style={{ backgroundColor: "#B13232" }} />
              </Col>
            </Row>
          </Col>
          <Col xs={17} sm={17} md={16} lg={16} xl={16} xxl={16}>
            <Row justify="start">
              <TextModal>The passion of coffee.</TextModal>
            </Row>
          </Col>
        </Row>
        <Row align="middle" gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col xs={7} sm={7} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="end" gutter={8}>
              <Col>
                <ColorTone style={{ backgroundColor: "#D9DA8E" }} />
              </Col>
              <Col>
                <ColorTone style={{ backgroundColor: "#EED657" }} />
              </Col>
            </Row>
          </Col>
          <Col xs={17} sm={17} md={16} lg={16} xl={16} xxl={16}>
            <Row justify="start">
              <TextModal>The best care for the best coffee.</TextModal>
            </Row>
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col xs={7} sm={7} md={8} lg={8} xl={8} xxl={8}>
            <Row justify="end" gutter={[8, 8]}>
              <Col>
                <ColorTone style={{ backgroundColor: "#FCF6D4" }} />
              </Col>
              <Col>
                <ColorTone style={{ backgroundColor: "#ECC197" }} />
              </Col>
              <Col>
                <ColorTone style={{ backgroundColor: "#E69886" }} />
              </Col>
            </Row>
          </Col>
          <Col xs={17} sm={17} md={16} lg={16} xl={16} xxl={16}>
            <Row justify="start">
              <TextModal>The shop located in the heart of nature.</TextModal>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
