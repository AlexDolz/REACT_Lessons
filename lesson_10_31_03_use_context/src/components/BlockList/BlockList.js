import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { BlockItem } from '../BlockItem/BlockItem';

export const BlockList = () => {
  const { string } = useContext(Context);

  return (
    <div className='div__elem'>
      BlockList
      <p>{string}</p>
      <BlockItem />
    </div>
  );
};
