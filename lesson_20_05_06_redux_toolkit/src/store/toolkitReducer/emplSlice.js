import { createSlice } from '@reduxjs/toolkit';

const emplSlice = createSlice({
  name: 'empl',
  initialState: [
    { id: 1, name: 'Alex', age: 19 },
    { id: 2, name: 'Steven', age: 23 },
    { id: 3, name: 'Neena', age: 25 },
    { id: 4, name: 'John', age: 40 },
    { id: 5, name: 'Lui', age: 43 },
  ],
  reducers: {
    remLastEmpl(state) {
      state.pop();
    },
    remFirstEmpl(state) {
      state.shift();
    },
    addNewEmpl(state, action) {
      let [name, age] = action.payload.split(' ');
      let newEmpl = state.find(elem => elem.name === name);
      if (newEmpl) {
        newEmpl.age += 1;
      } else {
        state.push({ id: Date.now(), name: name, age: +age });
      }
    },
    resetAge(state) {
      state.forEach(elem => {
        elem.age = 0;
      });
    },
    changeAge(state, action) {
      state.forEach(elem => {
        elem.age += action.payload;
      });
    },
  },
});

export default emplSlice.reducer;
export const { remLastEmpl, remFirstEmpl, addNewEmpl, resetAge, changeAge } =
  emplSlice.actions;
