import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DECR_BY_PAYLOAD,
  INCR_BY_PAYLOAD,
} from '../store/toolkitReducer/countReducer';
import { decrement, increment } from '../store/toolkitReducer/countSlice';
// import {
//   decrByPayloadAction,
//   incrByPayloadAction,
// } from '../store/oldReduxReducers/countReducer';

const Count = () => {
  let dispatch = useDispatch();
  let count = useSelector(store => store.count.count);

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h2>{count}</h2>

        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(increment(1))}>Increment</button>

        <button onClick={() => dispatch(decrement(100))}>
          Decrement - 100
        </button>
        <button onClick={() => dispatch(increment(100))}>
          Increment + 100
        </button>

        <button onClick={() => dispatch(decrement(+prompt()))}>Remove N</button>
        <button onClick={() => dispatch(increment(+prompt()))}>Add N</button>
      </div>
    </div>
  );
};

export default memo(Count);
