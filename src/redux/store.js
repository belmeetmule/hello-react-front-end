import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingSlice';

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
