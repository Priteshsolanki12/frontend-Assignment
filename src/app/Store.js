// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/studentSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;