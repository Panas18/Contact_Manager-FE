import { Routes, Route } from "react-router-dom";
import RegisterForm from "../components/register/userRegister";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<h1> This is login page</h1>}></Route>
      <Route path="/" element={<h1>This is home page </h1>}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
    </Routes>
  );
}

export default AppRoutes;
