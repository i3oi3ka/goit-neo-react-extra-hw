// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, nameFilter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//     );
//   }
// );

export const selectContactLoading = (state) => state.contacts.loading;

export const selectContactError = (state) => state.contacts.error;
