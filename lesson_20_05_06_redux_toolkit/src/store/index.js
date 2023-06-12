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
import userSlice from './toolkitReducer/userSlice';
import postListSlice from './toolkitReducer/postListSlice';

// ----------------------------------------
// redux-persist for localStorage
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// CombineReducer objedenijaet neskolko reducers
// const rootReducer = combineReducers({
//   count: countReducer,
//   empl: emplReducer,
//   users: userReducer,
//   cart: cartReducer,
// });

// vazen poriadok

const persistConfig = {
  key: 'posts',
  version: 1,
  storage,
  whitelist: ['posts'], // to cto bi pokazivalo i sledilo
  blacklist: ['count'], // to ctobi ne pokazivalo i ne sledilo
};

const rootReducer = combineReducers({
  // count: countReducer,
  count: countSlice,
  empl: emplSlice,
  users: userSlice,
  posts: postListSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = configureStore({
  // reducer: rootReducer, bez persist
  reducer: persistedReducer, // s redux persist
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
      },
    }),
});
