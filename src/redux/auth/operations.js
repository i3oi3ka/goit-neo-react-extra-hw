import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = axios.post("/users/signup", userData);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
