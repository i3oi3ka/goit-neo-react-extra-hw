import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  editContact,
} from "./operations";

const handlePending = (state) => {
  state.isloading = true;
};

const handleRejected = (state, { payload }) => {
  state.isloading = false;
  state.error = payload;
};

const handleFullfield = (state) => {
  state.isloading = false;
  state.error = null;
};

const initialState = {
  items: [],
  isloading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        if (index !== -1) {
          state.items[index] = payload;
        }
      })
      .addMatcher(
        ({ type }) => /^contacts\/.*\/pending$/.test(type),
        handlePending
      )
      .addMatcher(
        ({ type }) => /^contacts\/.*\/rejected$/.test(type),
        handleRejected
      )
      .addMatcher(
        ({ type }) => /^contacts\/.*\/fulfilled$/.test(type),
        handleFullfield
      );
  },
});

export const contactsReducer = contactSlice.reducer;
