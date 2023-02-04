import { configureStore } from "@reduxjs/toolkit";
//import { contactsReduser, filterReduser  } from "./redusers";
import { contactsReduser } from "./sliceContacts";
import { filterReduser } from "./sliceFilter";
import {logger} from 'redux-logger'
// Створюємо розширення стора, щоб додати інструменти розробника
export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
  middleware: getGetDefaultMiddleware => [...getGetDefaultMiddleware(),logger] , 
});

console.log(store.getState())