import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;
