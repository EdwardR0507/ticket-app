import { useState } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { Navigate, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Desk = () => {
  const userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
  const [user] = useState(userLocalStorage);

  const navigate = useNavigate();

  useHideMenu(false);

  const nextTicket = () => {
    console.log("nextTicket");
  };

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/login", { replace: true });
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working at desk: </Text>
          <Text style={{ fontSize: 30 }} type="success">
            {user.desk}
          </Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={handleLogout}>
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
