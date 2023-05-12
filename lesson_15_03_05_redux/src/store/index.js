import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from './countReducer';
import { emplReducer } from './emplReducer';
import { userReducer } from './userReducer';
// thunk - library which helps to work with assynchrone code in redux
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';

// CombineReducer objedenijaet neskolko reducers
const rootReducer = combineReducers({
  count: countReducer,
  empl: emplReducer,
  users: userReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
