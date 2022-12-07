/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/greetings';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    greetings: greetingsSlice,
  },
});

export default store;
