

import { createAction,nanoid } from "@reduxjs/toolkit";

export const setContacts = createAction("filter/setFilter", text =>{
  text.id = nanoid();
  return {
    payload: 
      text,
    
    };
});

export const setFilter = createAction("FILTER_CONTACTS");

export const deleteContacts = createAction("DELETE_CONTACTS");