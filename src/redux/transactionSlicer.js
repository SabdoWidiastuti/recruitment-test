import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { objectToArray } from '../utils/Helper';

export const getTransactionAsync = createAsyncThunk(
    'transaction/getTransactionAsync',
    async () => {
        const resp = await fetch('https://nextar.flip.id/frontend-test');

        if (resp.ok) {
            const transaction = await resp.json();
            return { data: objectToArray(transaction) };
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