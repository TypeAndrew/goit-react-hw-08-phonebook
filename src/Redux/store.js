import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
//import { contactsReduser, filterReduser  } from "./redusers";
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

//import {logger} from 'redux-logger'
// Створюємо розширення стора, щоб додати інструменти розробника



export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Редюсер слайсу
const persistConfig = {
  key: 'goit',
  storage,

  // blacklist: ['search'],
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
})

export default persistReducer(persistConfig, rootReducer);
//console.log(store.getState())
//[...getGetDefaultMiddleware(), logger]
