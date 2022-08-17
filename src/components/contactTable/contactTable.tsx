import { Table } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Contact from "../../domain/contact";
import * as http from "../../http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../store/slice/contactSlice";
import { RootState } from "../../store/store";
import "./contactTable.css";

const { Column } = Table;

const formatedData = (contact: Contact) => {
  const tableRow = {
    key: contact.id,
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    mobile: contact.mobile,
    company: contact.company,
    photo: contact.photo,
    is_favourite: contact.is_favourite,
  };

  return tableRow;
};

const ContactTable = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.addContact.data);
  let data = contacts.map(formatedData);

  useEffect(() => {
    (async () => {
      const data = await http.getAllContact();
      dispatch(addContact(data));
    })();
  }, [dispatch]);

  const handleDeleteButton = async (contact_id: string) => {
    const res = await http.deleteContact(contact_id);
    const data = await http.getAllContact();
    dispatch(addContact(data));
    console.log(res);
  };

  const handleFavourite = async (is_favourite: boolean, contact_id: string) => {
    const formData = new FormData();
    formData.append("is_favourite", `${!is_favourite}`);
    const res = await http.updateContact(formData, contact_id);
    const data = await http.getAllContact();
    dispatch(addContact(data));
    console.log(res);
  };

  return (
    <div>
      <div className="contact--title">Contacts</div>
      <Table dataSource={data} pagination={false} style={{ marginTop: "20px" }}>
        <Column
          title=""
          dataIndex="photo"
          render={(pic) => (
            <img src={pic} alt="Profile Pic" className="profile--photo" />
          )}
        />
        <Column title="First Name" dataIndex="first_name" key="first_name" />
        <Column title="Last Name" dataIndex="last_name" key="last_name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Mobile Number" dataIndex="mobile" key="mobile" />
        <Column
          title=""
          dataIndex="key"
          render={(key, contact: Contact) => (
            <div onClick={() => handleFavourite(contact.is_favourite!, key)}>
              {contact.is_favourite ? (
                <StarFilled style={{ color: "#1990fe", fontSize: "20px" }} />
              ) : (
                <StarOutlined style={{ fontSize: "20px" }} />
              )}
            </div>
          )}
        />
        <Column
          title="Action"
          key="action"
          dataIndex="key"
          render={(key) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/contact/edit/${key}`}>Edit</Link>
              <Link to="#">View</Link>
              <Link
                style={{ color: "red" }}
                to={"/contact"}
                onClick={() => {
                  handleDeleteButton(key);
                }}
              >
                Delete
              </Link>
            </div>
          )}
        />
      </Table>
    </div>
  );
};
export default ContactTable;
