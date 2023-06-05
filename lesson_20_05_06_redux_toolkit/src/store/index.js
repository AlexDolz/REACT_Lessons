// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { countReducer } from './countReducer';
// import { emplReducer } from './emplReducer';
// import { userReducer } from './userReducer';
// thunk - library which helps to work with assynchrone code in redux
// import thunk from 'redux-thunk';
// import { cartReducer } from './cartReducer';

// __----__________________________
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from './toolkitReducer/countReducer';
import countSlice from './toolkitReducer/countSlice';
import emplSlice from './toolkitReducer/emplSlice';

// CombineReducer objedenijaet neskolko reducers
// const rootReducer = combineReducers({
//   count: countReducer,
//   empl: emplReducer,
//   users: userReducer,
//   cart: cartReducer,
// });

const rootReducer = combineReducers({
  // count: countReducer,
  count: countSlice,
  empl: emplSlice,
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = configureStore({
  reducer: rootReducer,
});
