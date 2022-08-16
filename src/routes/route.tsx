import { Routes, Route } from "react-router-dom";
import RegisterForm from "../components/register/userRegister";
import UserLoginForm from "../components/login/userLogin";
import HomePage from "../pages/home/homePage";
import { NavBar } from "../components/navbar/navBar";
import AddContactPage from "../pages/addContact/addContact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<HomePage />}></Route>
        <Route path="/contact/add" element={<AddContactPage />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
