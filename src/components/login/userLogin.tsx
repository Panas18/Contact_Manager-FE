import { Button, Form, Input } from "antd";
import React, { useLayoutEffect } from "react";
import "antd/dist/antd.css";
import "./userLogin.css";
import * as http from "../../utils/http";
import { Link, useNavigate } from "react-router-dom";

const UserLoginForm: React.FC = () => {
  localStorage.removeItem("accessToken");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F2F2EE";
  });

  const onFinish = async (values: any) => {
    try {
      const res = await http.loginUser(values);
      try {
        const accessToken = res.data.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        form.resetFields();
        navigate({ pathname: "/" });
      } catch (err) {
        console.log("password or email doesn't match");
      }
    } catch (err) {
      console.log("Error login in");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login--container">
      <h1 className="login--title">Sign in to Contact</h1>
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
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <div>
            <hr />
          </div>
          <div className="login">
            Dont' have an account?
            <Link to="/register"> Sign up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserLoginForm;
