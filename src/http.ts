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

export const getContactById = async (contact_id: number, config: any) => {
  const response = await axios.get(`/contact/${contact_id}`, config);

  return response;
};

export const addContact = async (contact: any, config: any) => {
  console.log(contact);
  const response = await axios.post("/contact/add", contact, config);
  return response;
};

export const updateContact = async (contact: any, id: string, config: any) => {
  console.log(contact);
  const response = await axios.put(`/contact/${id}`, contact, config);
  return response;
};
