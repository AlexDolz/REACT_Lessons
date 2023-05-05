import { combineReducers, createStore } from 'redux';
import { countReducer } from './countReducer';
import { emplReducer } from './emplReducer';

// CombineReducer objedenijaet neskolko reducers
const rootReducer = combineReducers({
  count: countReducer,
  empl: emplReducer,
});

export const store = createStore(rootReducer);
