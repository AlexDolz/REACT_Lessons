import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { id: 11, name: 'Steven Wilyam' },
      { id: 12, name: 'John Snow' },
      { id: 13, name: 'Neena Stolkovich' },
    ],
  },
  reducers: {
    addNewUser(state, action) {
      state.users.push({ id: Date.now(), name: action.payload });
    },
    removeById(state, action) {
      state.users = state.users.filter(elem => elem.id !== action.payload);
    },
    // 2 solution
    // removeById(state, action) {
    //   let findElem = state.users.findIndex(elem => elem.id === action.payload);
    //   state.users.splice(findElem, 1);
    // },

    // addNewUserList(state, action) {
    //   state.users = state.users.concat(action.payload);
    // },
    // 2 solution
    // addNewUserList(state, action) {
    //   state.users = [...state.users, ...action.payload];
    // },
    // 3 solution
    addNewUserList(state, action) {
      state.users.push(...action.payload);
    },
    addNewUserById(state, action) {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addNewUser, removeById, addNewUserList, addNewUserById } =
  usersSlice.actions;
