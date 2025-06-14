import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  inititalState: {
    user: {
      name: "",
      email: "",
    },
    token: "",
  },
  extraReducers: (builder) => builder.addCase(),
});

export const authReducer = authSlice.reducer;
