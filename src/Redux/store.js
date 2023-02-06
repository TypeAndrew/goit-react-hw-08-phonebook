import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { contactsReduser } from "./sliceContacts";
import { filterReduser } from "./sliceFilter";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


// Редюсер слайсу
export const persistConfig = {
  key: 'goit',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['search'],
};

export const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
})

 const persistedReduser = persistReducer(persistConfig, rootReducer);

//[...getGetDefaultMiddleware(), logger]
export const store = configureStore({
  devtools: true,
  reducer: persistedReduser,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);