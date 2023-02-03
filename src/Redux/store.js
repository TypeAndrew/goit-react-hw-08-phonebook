import { configureStore } from "@reduxjs/toolkit";
//import { contactsReduser, filterReduser  } from "./redusers";
import { contactsReduser } from "./sliceContacts";
import { filterReduser } from "./sliceFilter";

// Створюємо розширення стора, щоб додати інструменти розробника
export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});

console.log(store.getState())