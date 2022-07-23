import { Card } from "@nextui-org/react";
import { Col, Image, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledTagCoding, StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/Text";
import { DarkTheme, LightTheme } from "../../../../theme";
import { ProductPageModal } from "./components/ProductPageModal";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductPage: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <ProductPageModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={11} lg={12} xl={12} xxl={11}>
        <Card
          isPressable
          onClick={() => setVisible(true)}
          variant="flat"
          css={{
            background: themeContext.backgroundColors.card,
            shadow: themeContext.cardShadow.default,
            borderRadius: 16,
          }}
        >
          <Image
            src="/image/card/imgCard08.jpg"
            preview={false}
            style={{ borderRadius: 16 }}
          />
          <Card.Body css={{ p: "32px 24px" }}>
            <Row>
              <TextTitle>Product Page</TextTitle>
            </Row>
            <Row style={{ marginTop: 4 }}>
              <TextContent>is simply dummy text of the printing.</TextContent>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col>
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
