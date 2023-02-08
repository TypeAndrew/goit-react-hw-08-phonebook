import { createSlice, nanoid, current } from "@reduxjs/toolkit";
import { getContactsThunk } from "./thunkContacts";

const contactsInitialState = {

    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
        });
    },
});

// Генератори екшенів
export const { setContacts, deleteContacts } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;