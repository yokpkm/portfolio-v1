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

export const WebAppDesignModal: React.FC<Props> = ({ visible, setVisible }) => {
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
        <Row justify="center" style={{ marginBottom: 16 }}>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={8}>
            <Row align="middle" gutter={[8, 8]} style={{ marginBottom: 40 }}>
              <Col flex="auto">
                <TextHeader>Progress Tracking Web Application</TextHeader>
              </Col>
              <Col>
                <Row gutter={[8, 16]}>
                  <Col>
                    <StyledTagDesign>UI Design</StyledTagDesign>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={[0, 32]}>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/card/imgCard01.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    The web application purpose is to track progress of
                    projects.
                  </TextModal>
                </Row>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    It's simple to use and responsive to all platforms.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img01.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    The teacher must create projects or subjects.
                  </TextModal>
                </Row>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    After that, students joined and update the progress.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img02.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    Teachers can share information on the news tab.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img03.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    Students can respond to questionnaire on the files tab.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img04.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    Students can upload document or media files on the groups
                    tab.
                  </TextModal>
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center">
                  <Image
                    src="/image/modal/01-thesis/img05.jpg"
                    preview={false}
                    style={{ borderRadius: 16 }}
                  />
                </Row>
              </Col>
              <Col span={24}>
                <Row justify={xs && !sm ? "start" : "center"}>
                  <TextModal>
                    Last, they can make appointments on the progress tab.
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
