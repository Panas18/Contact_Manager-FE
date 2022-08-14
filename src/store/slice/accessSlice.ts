import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface state {
  data: string;
}
export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    data: "",
  },
  reducers: {
    addAccessToken: (state: state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { addAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
