import { Table } from "antd";
import { Link } from "react-router-dom";
import type { ColumnsType } from "antd/lib/table";
import Contact from "../../domain/contact";
import * as http from "../../http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../store/slice/contactSlice";
import { RootState } from "../../store/store";
import "./contactTable.css";

const columns: ColumnsType<any> = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="#">View</Link>
      </div>
    ),
  },
];

const formatedData = (contact: Contact) => {
  const tableRow = {
    key: contact.id,
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    mobile: contact.mobile,
    company: contact.company,
  };

  return tableRow;
};

const ContactTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      const data = await http.getAllContact(config);
      dispatch(addContact(data));
    })();
  }, [dispatch]);

  const contacts = useSelector((state: RootState) => state.addContact.data);
  const data = contacts.map(formatedData);
  return (
    <div>
      <div className="contact--title">Contacts</div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ marginTop: "20px" }}
      ></Table>
    </div>
  );
};
export default ContactTable;
