import React from "react";
import ContactTable from "../../components/contactTable/contactTable";
import "./homePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="table--container">
      <ContactTable />
    </div>
  );
};

export default HomePage;
