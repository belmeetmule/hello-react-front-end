import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../../services/greetingAPI';

const initialState = {
  message: '',
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetchGreeting();
    // The value we return becomes the `fulfilled` action payload
    return response.message;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.message = action.payload;
      });
  },
});

export const { load } = greetingSlice.actions;

export const selectGreeting = (state) => state.greeting.message;

export default greetingSlice.reducer;
