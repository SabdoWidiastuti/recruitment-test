import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { objectToArray } from '../utils/Helper';
import axios from 'axios';

export const getTransactionAsync = createAsyncThunk(
    'transaction/getTransactionAsync',
    async () => {
        try {
            const response = await axios.get('https://nextar.flip.id/frontend-test');
            return { data: objectToArray(response.data) };
        } catch (error) {
            return { data: [] };
        }
    }
);

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        isLoading: true,
        data: []
    },
    extraReducers: {
        [getTransactionAsync.fulfilled]: (state, action) => {
            return {
                isLoading: false,
                data: action.payload.data
            };
        }
    }
})

export default transactionSlice.reducer;