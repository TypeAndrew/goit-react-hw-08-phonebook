import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async(params, thunkAPI) => {
        try {
    
            const { data } = await axios.get(
                'https://63e360e0c919fe386c052176.mockapi.io/contacts/', {
                    params,
                },
            );
            
            return data;
        } catch (e) {
 
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);

export const postContactsThunk = createAsyncThunk(
    'contacts/addContact',
    async(params, thunkAPI) => {

        const { name, number ,id} = params;
       // const id = name;
        try {

            const { data } =  await axios.post(
                'https://63e360e0c919fe386c052176.mockapi.io/contacts', {
                   
                    name,
                    number,
                    id,

                },
            );
            
           return data; 
        } catch (e) {

            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContact',
    async(params, thunkAPI) => {


        const { id } = params;
        try {
 
            const { data } = await axios.delete(
                `https://63e360e0c919fe386c052176.mockapi.io/phonebook/contacts/${id}`, {
                    id,
               

                },
            );
                return data; 
        } catch (e) {
           
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);