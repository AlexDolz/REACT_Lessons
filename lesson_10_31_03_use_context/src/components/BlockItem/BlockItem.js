import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const BlockItem = () => {
  const { string } = useContext(Context);

  return (
    <div className='div__elem'>
      BlockItem
      <p>{string}</p>
    </div>
  );
};
