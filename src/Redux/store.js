import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { contactsReduser, contactsDeleteReduser } from "./sliceContacts";
import { filterReduser } from "./sliceFilter";

// Редюсер слайсу
export const rootReducer = combineReducers({
    phonebook: contactsReduser,
    filter: filterReduser,
    contscts: contactsDeleteReduser,
})

//[...getGetDefaultMiddleware(), logger]
export const store = configureStore({
    devtools: true,
    reducer: rootReducer,

    /*middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),*/
});