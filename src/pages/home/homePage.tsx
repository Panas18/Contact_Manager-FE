import React from "react";
import ContactTable from "../../components/contactTable/contactTable";
import "./homePage.css";
import { useLayoutEffect } from "react";

const HomePage: React.FC = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#F2F2EE";
  });
  return (
    <div className="table--container">
      <ContactTable />
    </div>
  );
};

export default HomePage;
