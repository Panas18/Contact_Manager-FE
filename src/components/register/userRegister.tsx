import { Button, Form, Input } from "antd";
import React, { useLayoutEffect } from "react";
import "antd/dist/antd.css";
import "./userRegister.css";
import * as http from "../../http";

const UserRegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F2F2EE";
  });
  const onFinish = async (values: any) => {
    const res = await http.registerUser(values);
    console.log(res);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register--container">
      <h1>Registration Form</h1>
      <div>
        <Form
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="John" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Smith" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email adderss" },
              { type: "email", message: "Please enter valid email" },
            ]}
          >
            <Input placeholder="example@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter secure password" />
          </Form.Item>

          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <div>
            <hr />
          </div>
          <div className="signin">
            Already on Contact? <a href="login">Sign up</a>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserRegisterForm;
