import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = axios.post("/users/signup", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = axios.post("users/login", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      axios.post("users/logout");
      removeToken();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
