import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewEmplAction,
  changeAgeAction,
  delEmplByIdAction,
  delFirstEmplAction,
  delLastEmplAction,
  resetAgeAction,
} from '../store/oldReduxReducers/emplReducer';
import {
  addNewEmpl,
  changeAge,
  remFirstEmpl,
  remLastEmpl,
  resetAge,
} from '../store/toolkitReducer/emplSlice';

const Workers = () => {
  let empl = useSelector(store => store.empl);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Workers</h2>
        <button onClick={() => dispatch(remFirstEmpl())}>
          Delete first worker
        </button>
        <button onClick={() => dispatch(remLastEmpl())}>
          Delete last worker
        </button>
        <button onClick={() => dispatch(addNewEmpl(prompt()))}>
          Add new worker
        </button>
        <div>
          {empl.map(elem => (
            <div
              onDoubleClick={() => dispatch(delEmplByIdAction(elem.id))}
              key={elem.id}
            >
              <p title='DoubleClick to remove empl.'>
                {elem.name} {elem.age}
              </p>
            </div>
          ))}
          <button onClick={() => dispatch(changeAge(10))}>Change Age</button>
          <button onClick={() => dispatch(resetAge())}>Reset Age to 0</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Workers);
