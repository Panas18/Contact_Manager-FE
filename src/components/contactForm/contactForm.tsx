import { Button, Form, Input, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import "./contactForm.css";
import { useLayoutEffect, useEffect } from "react";
import * as http from "../../utils/http";
import { useNavigate, useParams } from "react-router-dom";
import openNotification from "../../utils/notification";

interface ContactFormInterface {
  update: boolean;
}

const ContactForm = (props: ContactFormInterface) => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F2F2EE";
  });

  /*
  Get contact information for updating contact
  */
  useEffect(() => {
    (async () => {
      if (props.update) {
        const res: any = await http.getContactById(+id!);
        const contact = res.data.data;

        form.setFieldsValue({
          first_name: contact.first_name,
          last_name: contact.last_name,
          middle_name: contact.middle_name,
          work: contact.work,
          home: contact.home,
          mobile: contact.mobile,
          email: contact.email,
          is_favourite: contact.is_favourite,
          company: contact.company,
        });
      }
    })();
  }, [id, props.update, form]);

  const onFinish = async (values: any) => {
    const formData = new FormData();

    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    values.middle_name && formData.append("middle_name", values.middle_name);
    values.work && formData.append("work", values.work);
    values.home && formData.append("home", values.home);
    values.mobile && formData.append("mobile", values.mobile);
    values.email && formData.append("email", values.email);
    values.company && formData.append("company", values.company);
    values.photo && formData.append("photo", values.photo.file.originFileObj);
    formData.append("is_favourite", `${!!values.is_favourite}`);

    try {
      if (!props.update) {
        const res = await http.addContact(formData);
        openNotification(res.data.message);
      } else {
        const res = await http.updateContact(formData, id as string);
        openNotification(res.data.message);
        console.log(res);
      }

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
      <div className="contactForm--title">
        {props.update ? "Update Contact" : "Add Contact"}
      </div>
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
          <Form.Item name="photo" label="Photo">
            <Upload maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              {props.update ? "Update Contact" : "Add Contact"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
