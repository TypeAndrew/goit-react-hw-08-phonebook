import { createSlice, current  } from "@reduxjs/toolkit";
import { getContactsThunk, postContactsThunk, deleteContactsThunk } from "./thunkContacts";

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
    
    extraReducers: 
        builder => {
        builder.addCase(getContactsThunk.pending, state => {
            state.isLoading = true;
            console.log('pending')
        }).addCase(getContactsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = payload;
            console.log('fullfiled')
        }).addCase(getContactsThunk.rejected, state => {
            state.error = true;
            console.log(current(state))
        }).addCase(postContactsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const userExist = state.contacts.find(element => element.name === payload.name);

            if (userExist !== undefined) {
                alert(`The ${payload.name} is already in contacts`);
            } else {
                state.contacts.push(payload);
            }
        }).addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
  
            state.contacts = state.contacts.filter(el => el.id !== payload.id)  ;
        });
        
        },
    

    });

//

//export const { setContacts, deleteContacts } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
