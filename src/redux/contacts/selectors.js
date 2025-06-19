import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.replaceAll("-", "").includes(nameFilter)
    );
  }
);

export const selectContactLoading = (state) => state.contacts.isloading;

export const selectContactError = (state) => state.contacts.error;
