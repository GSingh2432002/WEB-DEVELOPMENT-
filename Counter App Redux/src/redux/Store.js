import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './Slices/CountSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})