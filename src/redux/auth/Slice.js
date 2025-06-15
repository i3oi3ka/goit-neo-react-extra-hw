import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, signUpThunk } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state) => {
  state.isLoading = false;
  state.error = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    token: "",
    isLoggedIn: false,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.user = { name: "", email: "" };
        state.token = "";
      })
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
