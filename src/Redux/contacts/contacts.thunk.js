import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAuthToken } from 'Redux/auth/auth.selector';
import { getContacts } from 'Redux/contacts/contacts.selectors';
import { privateApi, token } from '../../http/http';



export const getContactsThunk = createAsyncThunk('GET contacts', async (_, {getState}) => {
    const stateTocken = selectAuthToken(getState())
    token.set(stateTocken);
    const { data } = await privateApi.get('contacts');
    return data;
});

export const postContactsThunk = createAsyncThunk('POST contacts', async(values, {getState}, rejectWithValue) => {
    const stateTocken = selectAuthToken(getState())
    const stateContacts = getContacts(getState())
    const userExist = stateContacts.find(element => element.name === values.name);
            if (userExist !== undefined) {
                alert(`The ${values.name} is already in contacts`);
                return rejectWithValue(); 
            }
    
    token.set(stateTocken);
    const { data } = await privateApi.post('contacts',values);
    return data;
});

export const deleteContactsThunk = createAsyncThunk('DELETE contacts', async ({ id }, { getState }) => {
            
             
    const stateTocken = selectAuthToken(getState())
    token.set(stateTocken);
    const { data } = await privateApi.delete(`contacts/${id}`);
    return data;
});
