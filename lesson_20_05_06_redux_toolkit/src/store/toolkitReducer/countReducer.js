import { createAction, createReducer } from '@reduxjs/toolkit';

const defaultState = {
  count: 0,
};

export const INCR_BY_PAYLOAD = createAction('INCR_BY_PAYLOAD');
export const DECR_BY_PAYLOAD = createAction('DECR_BY_PAYLOAD');

export default createReducer(defaultState, {
  [INCR_BY_PAYLOAD]: function (state, action) {
    state.count += action.payload;
  },
  [DECR_BY_PAYLOAD]: function (state, action) {
    state.count -= action.payload;
  },
});
