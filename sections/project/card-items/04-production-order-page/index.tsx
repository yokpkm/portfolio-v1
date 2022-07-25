import { Card } from "@nextui-org/react";
import { Col, Row } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonMore } from "../../../../components/Button";
import { StyledTagCoding, StyledTagDesign } from "../../../../components/Tag";
import { TextContent, TextTitle } from "../../../../components/Text";
import { DarkTheme, LightTheme } from "../../../../theme";
import { ProductionOrderPageModal } from "./components/ProductionOrderPageModal";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ProductionOrderPage: React.FC<Props> = ({
  visible,
  setVisible,
}) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <ProductionOrderPageModal visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
          variant="flat"
          css={{
            background: themeContext.backgroundColors.card,
            shadow: themeContext.cardShadow.default,
            borderRadius: 16,
          }}
        >
          <Card.Image src="/image/card/imgCard04.jpg" />
          <Card.Body css={{ p: "32px 24px" }}>
            <Row>
              <TextTitle>Production Order Page</TextTitle>
            </Row>
            <Row style={{ marginTop: 4 }}>
              <TextContent>is simply dummy text of the printing.</TextContent>
            </Row>
            <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
              <Col>
                <StyledTagDesign>UI Design</StyledTagDesign>
              </Col>
              <Col flex="auto">
                <StyledTagCoding>Coding</StyledTagCoding>
              </Col>
              <Col>
                <ButtonMore onClick={() => setVisible(true)}>
                  Read more
                </ButtonMore>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
