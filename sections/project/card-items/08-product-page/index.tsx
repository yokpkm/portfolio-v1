import { Col, Image, Row } from "antd";
import { ButtonMore } from "../../../../components/Button";
import { DividerCard } from "../../../../components/Divider";
import { StyledTagCoding, StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/Text";
import { ProductPageModal } from "./components/ProductPageModal";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductPage: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <>
      <ProductPageModal visible={visible} setVisible={setVisible} />
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Image
          src="/image/card/imgCard08.jpg"
          preview={false}
          style={{ borderRadius: 8 }}
        />
        <Row style={{ marginTop: 32 }}>
          <TextTitle>Product Page</TextTitle>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <TextContent>is simply dummy text of the printing.</TextContent>
        </Row>
        <Row>
          <TextContent>of the printing</TextContent>
        </Row>
        <DividerCard />
        <Row gutter={[8, 16]} align="middle">
          <Col>
            <StyledTagDesign>UI Design</StyledTagDesign>
          </Col>
          <Col flex="auto">
            <StyledTagCoding>Coding</StyledTagCoding>
          </Col>
          <Col>
            <ButtonMore onClick={() => setVisible(true)}>Read more</ButtonMore>
          </Col>
        </Row>
      </Col>
    </>
  );
};
