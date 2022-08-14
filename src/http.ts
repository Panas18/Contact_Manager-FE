import axios from "axios";
import User from "./domain/user";
axios.defaults.baseURL = "http://localhost:5000";

export const registerUser = async (user: User) => {
  const res = await axios.post("/register", user);
  return res;
};
