import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { contactsReduser } from "./sliceContacts";
import { filterReduser } from "./sliceFilter";

// Редюсер слайсу
export const rootReducer = combineReducers({
    phonebook: contactsReduser,
    filter: filterReduser,
 
})

//[...getGetDefaultMiddleware(), logger]
export const store = configureStore({
    devtools: true,
    reducer: rootReducer,

  
});

/*export const store = configureStore({
  reducer: {
    phonebook: contactsReduser,
    filter: filterReduser,
  },
});*/