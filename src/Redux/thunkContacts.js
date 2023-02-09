import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
    'contacts',
    async(params, thunkAPI) => {
        try {
            console.log(thunkAPI);
            const { data } = await axios.get(
                'https://63e360e0c919fe386c052176.mockapi.io/contacts/', {
                    params,
                },
            );

            return data;
        } catch (e) {
            console.log('error');
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);

export const putContactsThunk = createAsyncThunk(
    'contacts',
    async(params, thunkAPI) => {

        const { name, number ,id} = params;
       // const id = name;
        try {
            console.log(thunkAPI);
            const { data } = await axios.post(
                'https://63e360e0c919fe386c052176.mockapi.io/contacts', {
                   
                    name,
                    number,
                    id,

                },
            );

            return data;
        } catch (e) {
            console.log('error');
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);

export const deleteContactsThunk = createAsyncThunk(
    'contacts',
    async(params, thunkAPI) => {


        const { id } = params;
        try {
            console.log(thunkAPI);
            const { data } = await axios.delete(
                `https://63e360e0c919fe386c052176.mockapi.io/phonebook/contacts/${id}`, {
                    id,
               

                },
            );

            return data;
        } catch (e) {
            console.log('error');
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);