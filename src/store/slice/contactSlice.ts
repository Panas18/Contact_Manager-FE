import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../domain/contact";

interface state {
  data: Contact[];
}

export const contactSlice = createSlice({
  name: "contactSlice",
  initialState: {
    data: [] as Contact[],
  },
  reducers: {
    addContact: (state: state, action: PayloadAction<Contact[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
