import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 34,
    desk: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 35,
    desk: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNo: 35,
    desk: 6,
    agent: "Edward Ramos",
  },
];
const Queue = () => {
  return (
    <>
      <Title level={1}>Serving the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 2)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano"> {item.agent} </Tag>,
                    <Tag color="magenta"> desk: {item.desk} </Tag>,
                  ]}
                >
                  <Title> No. {item.ticketNo}</Title>
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
            dataSource={data.slice(2)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">On the desk: </Text>
                      <Tag color="magenta"> {item.ticketNo} </Tag>
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
