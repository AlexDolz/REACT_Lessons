import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsListReducer } from './Reducers/productsListReducer';

const rootReducer = combineReducers({
  productsList: productsListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
