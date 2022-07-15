import { Col, Image, Row } from "antd";
import { ButtonMore } from "../../../../components/Button";
import { DividerCard } from "../../../../components/Divider";
import { StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/Text";
import { LogoDesignModal } from "./components/LogoDesignModal";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const LogoDesign: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <>
      <LogoDesignModal visible={visible} setVisible={setVisible} />
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Image
          src="/image/card/imgCard09.jpg"
          preview={false}
          style={{ borderRadius: 8 }}
        />
        <Row style={{ marginTop: 32 }}>
          <TextTitle>Coffee Shop Logo Design</TextTitle>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <TextContent>
            The coffee shop name is CUPFÉ, which the concept offers coffee and
            drinking buffet.
          </TextContent>
        </Row>
        <DividerCard />
        <Row gutter={[8, 16]} align="middle">
          <Col flex="auto">
            <StyledTagDesign>Logo Design</StyledTagDesign>
          </Col>
          <Col>
            <ButtonMore onClick={() => setVisible(true)}>Read more</ButtonMore>
          </Col>
        </Row>
      </Col>
    </>
  );
};
