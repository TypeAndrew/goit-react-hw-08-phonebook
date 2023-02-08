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

            //   if (!data.isAdmin) {
            //     return thunkAPI.fulfillWithValue();
            //   }

            // console.log(thunkAPI.getState());
            // if (data.isAdmin) {
            //   thunkAPI.dispatch({ type: 'USER_ADMIN' });
            // }
            //   throw new Error();
            return data;
        } catch (e) {
            console.log('error');
            // ...
            return thunkAPI.rejectWithValue();
        }
    },
);