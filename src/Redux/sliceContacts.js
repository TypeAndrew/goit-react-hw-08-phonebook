import { createSlice, nanoid, current } from "@reduxjs/toolkit";
import { getContactsThunk, putContactsThunk, deleteContactsThunk } from "./thunkContacts";

const contactsInitialState = {

    contacts: [
        
    ],
    isLoading: false,
    error: null,
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
    extraReducers: builder => {
        builder.addCase(getContactsThunk.pending, state => {
            state.isLoading = true;
        }).addCase(getContactsThunk.fulfilled, (state, { payload }) => {
            state.contacts = payload;
        }).addCase(getContactsThunk.rejected, state => {
            state.error = true;
        }).addCase(putContactsThunk, (state, { payload }) => {
            state.contacts = payload;
        });



    },

});

export const contactsSliceDelete = createSlice({
    // Ім'я слайсу
    name: "phonebook",
    // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
    // Об'єкт редюсерів
    // Генератори екшенів 
    extraReducers: builder => {

        builder.addCase(putContactsThunk.pending, (state, { payload }) => {
            state.isLoading = true;
        });

    },

});

export const contactsSliceAdd = createSlice({
    // Ім'я слайсу
    name: "phonebook",
    // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
    // Об'єкт редюсерів
    // Генератори екшенів 
    extraReducers: builder => {

        builder.addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = true;
        });

    },

});

export const { setContacts, deleteContacts } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
export const contactsDeleteReduser = contactsSliceDelete.reducer;
export const contactsAddeReduser = contactsSliceDelete.reducer;