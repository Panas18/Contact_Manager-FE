import axios from "axios";
import User from "./domain/user";
import LoginDetail from "./domain/user";
axios.defaults.baseURL = "http://localhost:5000";

export const registerUser = async (user: User) => {
  const res = await axios.post("/register", user);
  return res;
};

export const loginUser = async (loginDetail: LoginDetail) => {
  const res = await axios.post("/login", loginDetail);
  return res;
};

export const getAllContact = async (config: any) => {
  const response = await axios.get("/contact", config);
  const { data } = await response.data;

  return data;
};
