import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk } from "./operations";

const authSlice = createSlice({
  name: "auth",
  inititalState: {
    user: {
      name: "",
      email: "",
    },
    token: "",
    isLoggedIn: false,
  },
  extraReducers: (builder) =>
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    }),
});

export const authReducer = authSlice.reducer;
