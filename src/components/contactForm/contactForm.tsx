import { Button, Form, Input, Switch } from "antd";
import React from "react";
import "./contactForm.css";
import { useLayoutEffect } from "react";
import * as http from "../../http";
import { useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F2F2EE";
  });
  const onFinish = async (values: any) => {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    try {
      const res = await http.addContact(values, config);
      console.log(res);
      form.resetFields();
      navigate({ pathname: "/" });
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contactForm--container">
      <div className="contactForm--title">Add Contact</div>
      <div className="contactForm--wrapper">
        <Form
          form={form}
          layout="vertical"
          name="contactForm"
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
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item label="Middle Name" name="middle_name">
            <Input placeholder="Middle Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item label="Mobile" name="mobile">
            <Input placeholder="Mobile Number" />
          </Form.Item>

          <Form.Item label="Work" name="work">
            <Input placeholder="Work Number" />
          </Form.Item>

          <Form.Item label="Home" name="home">
            <Input placeholder="Home Number" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Company" name="company">
            <Input placeholder="Company name" />
          </Form.Item>
          <Form.Item
            label="Favourite"
            name="is_favourite"
            valuePropName="checked"
          >
            <Switch checked={false} />
          </Form.Item>

          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              Add Contact
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
