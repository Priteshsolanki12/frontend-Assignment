
import { createSlice, nanoid } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    },
    removeStudent: (state, action) => {
      const studentIdToRemove = action.payload.id;
      const newState = [
        ...state.filter(student => student.id !== studentIdToRemove)
      ];
      return newState;
    }
  }
});

export const { addStudent , removeStudent} = studentSlice.actions;
export default studentSlice.reducer;