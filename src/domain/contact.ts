export default interface Contact {
  id: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  user_account_id: number;
  email?: string;
  work?: number;
  home?: string;
  mobile?: string;
  company?: string;
  photo?: string;
  is_favourite?: boolean;
}

export interface TableData {
  key: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  company: string;
}
