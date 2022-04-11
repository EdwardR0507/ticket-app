import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Desk = () => {
  const nextTicket = () => {
    console.log("nextTicket");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Edward</Title>
          <Text>You are working at desk: </Text>
          <Text style={{ fontSize: 30 }} type="success">
            1
          </Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger">
            <CloseCircleOutlined />
            Log out
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>You are attending ticket number: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Next Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desk;
