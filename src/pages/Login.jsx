import { useState } from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
const { Title, Text } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 14 },
};

const Login = () => {
  const userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
  const [user] = useState(userLocalStorage);

  useHideMenu(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    window.localStorage.setItem("user", JSON.stringify(values));
    navigate("/desk");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (user) {
    return <Navigate to="/desk" />;
  }

  return (
    <>
      <Title level={2}>Login</Title>
      <Text>Enter your name and desk number</Text>
      <Divider />

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agent's name"
          name="agent"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="desk"
          name="desk"
          rules={[{ required: true, message: "Please enter desk's number" }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
