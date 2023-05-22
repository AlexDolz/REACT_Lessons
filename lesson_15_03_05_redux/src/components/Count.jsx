import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrByPayloadAction,
  incrByPayloadAction,
} from '../store/countReducer';

const Count = () => {
  let dispatch = useDispatch();
  let count = useSelector(store => store.count.count);

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h2>{count}</h2>

        <button onClick={() => dispatch(decrByPayloadAction(1))}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(1))}>
          Increment
        </button>

        <button onClick={() => dispatch(decrByPayloadAction(100))}>
          Decrement - 100
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(100))}>
          Increment + 100
        </button>

        <button onClick={() => dispatch(decrByPayloadAction(+prompt()))}>
          Remove N
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>
          Add N
        </button>
      </div>
    </div>
  );
};

export default memo(Count);
