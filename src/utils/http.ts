import axios from "axios";
import User from "../domain/user";
import LoginDetail from "../domain/user";
// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://hidden-mesa-45277.herokuapp.com/";

export const getConfig = () => {
  const accessToken = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  return config;
};
/**
 * Create new user
 * @param user
 * @returns
 */
export const registerUser = async (user: User) => {
  const res = await axios.post("/register", user);
  return res;
};

/**
 * Login user
 * @param loginDetail
 * @returns
 */
export const loginUser = async (loginDetail: LoginDetail) => {
  const res = await axios.post("/login", loginDetail);
  return res;
};

/**
 * Get all contacts
 * @param config
 * @returns
 */
export const getAllContact = async () => {
  const config = getConfig();
  const response = await axios.get("/contact", config);
  const { data } = await response.data;

  return data;
};

/**
 * Get contact by id
 * @param contact_id
 * @param config
 * @returns
 */
export const getContactById = async (contact_id: number) => {
  const config = getConfig();
  const response = await axios.get(`/contact/${contact_id}`, config);

  return response;
};
/**
 * Add new contact
 * @param contact
 * @param config
 * @returns
 */
export const addContact = async (contact: any) => {
  const config = getConfig();
  const response = await axios.post("/contact/add", contact, config);
  return response;
};

/**
 * Update Contact
 * @param contact
 * @param id
 * @param config
 * @returns
 */
export const updateContact = async (contact: any, id: string) => {
  const config = getConfig();
  const response = await axios.put(`/contact/${id}`, contact, config);
  return response;
};

export const deleteContact = async (contact_id: string) => {
  const config = getConfig();
  const response = await axios.delete(`/contact/${contact_id}`, config);
  return response;
};

export const authUser = async () => {
  const config = getConfig();
  const response = await axios.get("/authenticate", config);
  return response;
};
