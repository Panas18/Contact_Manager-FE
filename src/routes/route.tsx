import { Routes, Route } from "react-router-dom";
import RegisterForm from "../components/register/userRegister";
import UserLoginForm from "../components/login/userLogin";
import HomePage from "../pages/home/homePage";
import { NavBar } from "../components/navbar/navBar";
import ContactForm from "../components/contactForm/contactForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<HomePage />}></Route>
        <Route
          path="/contact/add"
          element={<ContactForm update={false} />}
        ></Route>
        <Route
          path="/contact/edit/:id"
          element={<ContactForm update={true} />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
