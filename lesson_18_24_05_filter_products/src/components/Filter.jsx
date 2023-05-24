import React from 'react';
import { useDispatch } from 'react-redux';
import {
  filterProducsByCountAction,
  filterProducsBySaleAction,
} from '../store/Reducers/productsListReducer';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Products with discount
        <input
          onClick={event =>
            dispatch(filterProducsBySaleAction(event.target.checked))
          }
          type='checkbox'
        />
      </label>

      <label>
        Products with count more than 350
        <input
          onClick={event =>
            dispatch(filterProducsByCountAction(event.target.checked))
          }
          type='checkbox'
        />
      </label>
    </div>
  );
};

export default Filter;
