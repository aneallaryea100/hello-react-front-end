/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  status: 'idle',
};

export const fetchGreetings = createAsyncThunk(
  'greetings/greetings',
  async () => {
    const response = await fetch('http://127.0.0.1:3001/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetings = action.payload;
      });
  },
});

export const { greetingsReducer } = greetingsSlice.actions;

export default greetingsSlice.reducer;
