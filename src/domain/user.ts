export  default interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  photo?: string;
}

export interface LoginDetail {
  email: string;
  password: string;
}
