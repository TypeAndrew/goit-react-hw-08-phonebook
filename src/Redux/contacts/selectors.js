import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.phonebook.contacts

export const getContact = state => state.phonebook;

export const getFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log("Calculating visible contacts");

    switch (filter) {
      case (filter !== "") :
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      default:
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
  }
);