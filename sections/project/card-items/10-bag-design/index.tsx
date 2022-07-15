import { Col, Image, Row } from "antd";
import { ButtonMore } from "../../../../components/Button";
import { DividerCard } from "../../../../components/Divider";
import { StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/Text";
import { BagDesignModal } from "./components/BagDesignModal";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const BagDesign: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <>
      <BagDesignModal visible={visible} setVisible={setVisible} />
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Image
          src="/image/card/imgCard10.jpg"
          preview={false}
          style={{ borderRadius: 8 }}
        />
        <Row style={{ marginTop: 32 }}>
          <TextTitle>Bag Pattern Design</TextTitle>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <TextContent>
            My pattern concept is the greatness. I designed by drawing and
            watercolor painting.
          </TextContent>
        </Row>
        <DividerCard />
        <Row gutter={[8, 16]} align="middle">
          <Col flex="auto">
            <StyledTagDesign>Pattern Design</StyledTagDesign>
          </Col>
          <Col>
            <ButtonMore onClick={() => setVisible(true)}>Read more</ButtonMore>
          </Col>
        </Row>
      </Col>
    </>
  );
};
