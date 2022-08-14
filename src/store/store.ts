import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slice/accessSlice";

export const store = configureStore({
  reducer: {
    accessToken: accessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
