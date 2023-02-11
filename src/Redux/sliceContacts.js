import { createSlice, nanoid, current } from "@reduxjs/toolkit";
import { getContactsThunk, postContactsThunk, deleteContactsThunk } from "./thunkContacts";

const contactsInitialState = {

    contacts: [
        
    ],
    isLoading: false,
    error: null,
};

const handlePending = state => {
  state.isLoading = true;
};


const contactsSlice = createSlice({
    // Ім'я слайсу
    name: "phonebook",
    // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
    // Об'єкт редюсерів
    reducers: {
        setContacts(state, { payload }) {
            const userExist = state.contacts.find(element => element.name === payload.name);

            if (userExist !== undefined) {
                alert(`The ${payload.name} is already in contacts`);
            } else {
                state.contacts.push(payload);
            }
        },
        deleteContacts(state, { payload }) {
            console.log(current(state));
            return { contacts: state.contacts.filter(el => el.name !== payload) };
        },
        prepare(text) {
            return {
                payload: {
                    text,
                    id: nanoid(),

                },
            };
        },
    },
    extraReducers: {
    [deleteContactsThunk.fulfilled]:handlePending,
    [postContactsThunk.fulfilled]:handlePending,
    [getContactsThunk.fulfilled](state, {payload}) {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
    },
    [postContactsThunk.fulfilled](state, {payload}) {
        state.isLoading = false;
        state.error = null;
        const userExist = state.contacts.find(element => element.name === payload.name);

            if (userExist !== undefined) {
                alert(`The ${payload.name} is already in contacts`);
            } else {
                state.contacts.push(payload);
            }
    },
    [deleteContactsThunk.fulfilled](state, {payload}) {
        state.isLoading = false;
        state.error = null;
        console.log(current(state))
        return { contacts: state.contacts.filter(el => el.id !== payload.id) } ;
    },
    },
});

//

//export const { setContacts, deleteContacts } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
