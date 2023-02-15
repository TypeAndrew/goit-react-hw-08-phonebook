import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { contactsReduser } from "./contacts/sliceContacts";
import { filterReduser } from "./contacts/sliceFilter";
import { authReducer } from "./auth/auth.slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// Редюсер слайсу
export const rootReducer = combineReducers({
    phonebook: contactsReduser,
    filter: filterReduser,
    auth: authReducer,  
})

//[...getGetDefaultMiddleware(), logger]
export const store = configureStore({
    devtools: true,
  reducer: rootReducer,  
    
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  }
);

export const persistor = persistStore(store);
/*export const store = configureStore({
  reducer: {
    phonebook: contactsReduser,
    filter: filterReduser,
  },
});*/