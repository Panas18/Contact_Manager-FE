import { Table } from "antd";
import { Link } from "react-router-dom";
import Contact from "../../domain/contact";
import * as http from "../../http";
import { useEffect, useState } from "react";
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
  };

  return tableRow;
};

const ContactTable = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.addContact.data);
  let data = contacts.map(formatedData);
  const [dataDeletion, setDataDeletion] = useState<boolean>(true);

  useEffect(() => {
    if (dataDeletion) {
      (async () => {
        const data = await http.getAllContact();
        dispatch(addContact(data));
        setDataDeletion(false);
      })();
    }
  }, [dispatch, dataDeletion]);

  const handleDeleteButton = async (contact_id: string) => {
    setDataDeletion(true);
    const res = await http.deleteContact(contact_id);
    data = data.filter((item) => {
      return item.key !== +contact_id;
    });
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
        <Column title="Company" dataIndex="company" key="company" />
        <Column
          title="Action"
          key="action"
          dataIndex="key"
          render={(key) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/contact/edit/${key}`}>Edit</Link>
              <Link
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
