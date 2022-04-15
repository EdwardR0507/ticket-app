import { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { SocketContext } from "../context/SocketContext";
import { useHideMenu } from "../hooks/useHideMenu";
import { getLastest } from "../helpers/getLastest";

const { Title, Text } = Typography;

const Queue = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getLastest().then((tickets) => {
      setTickets(tickets);
    });
  }, []);

  useEffect(() => {
    socket.on("tickets-assigned", (assigneds) => {
      setTickets(assigneds);
    });
    return () => {
      socket.off("tickets-assigned");
    };
  }, [socket]);

  return (
    <>
      <Title level={1}>Serving the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 2)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano"> {item.agent} </Tag>,
                    <Tag color="magenta"> Desk: {item.desk} </Tag>,
                  ]}
                >
                  <Title> No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> History </Divider>
          <List
            style={{
              height: "calc(100vh - 300px)",
              overflowY: "auto",
            }}
            dataSource={tickets.slice(2)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">On the desk: </Text>
                      <Tag color="magenta"> {item.number} </Tag>
                      <Text type="secondary"> Agent: </Text>
                      <Tag color="volcano"> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Queue;
