import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
