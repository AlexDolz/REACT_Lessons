import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewEmplAction,
  changeAgeAction,
  delEmplByIdAction,
  delFirstEmplAction,
  delLastEmplAction,
  resetAgeAction,
} from '../store/emplReducer';

const Workers = () => {
  let empl = useSelector(store => store.empl);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Workers</h2>
        <button onClick={() => dispatch(delFirstEmplAction())}>
          Delete first worker
        </button>
        <button onClick={() => dispatch(delLastEmplAction())}>
          Delete last worker
        </button>
        <button onClick={() => dispatch(addNewEmplAction(prompt()))}>
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
          <button onClick={() => dispatch(changeAgeAction(10))}>
            Change Age
          </button>
          <button onClick={() => dispatch(resetAgeAction(0))}>
            Reset Age to 0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workers;
