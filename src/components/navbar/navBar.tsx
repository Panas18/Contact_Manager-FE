import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navBar.css";
import openNotification from "../../utils/notification";

export const NavBar = () => {
  const handleLogout = () => {
    openNotification("Logout Successful");
    localStorage.removeItem("accessToken");
  };

  const Styling = (prop: { isActive: boolean }) => {
    const { isActive } = prop;
    return { color: isActive ? "#1990FE" : "gray" };
  };

  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/">
            <h1 className="logo">Contact Manager</h1>
          </Link>
        </div>
        <div className="nav-items">
          <NavLink
            style={Styling}
            to={"/contact/add"}
            className="addContact--btn"
          >
            Add Contact
          </NavLink>
          <NavLink
            onClick={handleLogout}
            className="logout"
            style={Styling}
            to="/login"
          >
            Logout
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
