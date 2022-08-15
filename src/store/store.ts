import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slice/accessSlice";
import contactReducer from "./slice/contactSlice";
export const store = configureStore({
  reducer: {
    accessToken: accessReducer,
    addContact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
