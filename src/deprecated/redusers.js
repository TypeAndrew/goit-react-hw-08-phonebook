import { setFilter, setContacts, deleteContacts } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [

]



const filterInitialState = "";

export const filterReduser = createReducer(filterInitialState, {

    [setFilter]: (state, { payload }) => { return payload; },

});

export const contactsReduser = createReducer(contactsInitialState, {

    [setContacts]: (state, { payload }) => { state.push(payload); },
    [deleteContacts]: (state, { payload }) => { return [...state.filter(el => el.name !== payload)]; },

});

/*// destruction action
export const filterReduser = (state = filterInitialState, {type, payload}) => {
   
    switch (type) {
      case setFilter.type:{
        return  payload;
      }
      default:
        return state
      }
};



export const contactsReduser = (state = contactsInitialState, {type, payload}) => {
   
    switch (type) {
      case setContacts.type:{
        return [ ...state,...payload];
      }
      case deleteContacts.type:{
        return [...state.filter(el => el.name !== payload)];
      }        
              
      default:
        return state
      }
};*/



///right code in store on configureStore( props ) , @reduxjs/toolkit library can't work with combineReduser////
/* instead down comment code , Redux library can make rduser on short code////
export const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});*/


///up code is right , Redux library can make rduser on short code combineReuser////
/*export const rootReducer = (state = {}, action) => {
  // Повертаємо об'єкт стану
  return {
    // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
    contacts: filterReduser(state.filter, action),
    filter: contactsReduser(state.contacts, action),
  };
};*/