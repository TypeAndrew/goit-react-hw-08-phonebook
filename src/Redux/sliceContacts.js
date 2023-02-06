import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState =
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
 
const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
      setContacts(state, { payload })
        { state.push(payload); },
      deleteContacts(state, { payload })
        { return [...state.filter(el => el.name !== payload)]; },
       prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            
          },
        };
      }, 
  },
});

// Генератори екшенів
export const { setContacts, deleteContacts } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;