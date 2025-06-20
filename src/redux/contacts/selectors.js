import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.includes(nameFilter)
    );
  }
);

export const selectContactLoading = (state) => state.contacts.isloading;

export const selectContactError = (state) => state.contacts.error;
