import { createAsyncThunk } from '@reduxjs/toolkit';
import  axios from 'axios'; 
import { setToken, instance } from '../auth/operations';
import { useSelector } from 'react-redux';
import { selectToken } from '../auth/selectors';


export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
        
    
            const response = await instance.get('/contacts');
           
            return response.data;
        
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        
        }
    });
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
       
        const response = await instance.post('/contacts', contact); return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        
        const response = await instance.delete(`/contacts/${contactId}`); return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
    
});