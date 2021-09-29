import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactionSlicer';

export default configureStore({
    reducer: {
        transaction: transactionReducer,
    }
})