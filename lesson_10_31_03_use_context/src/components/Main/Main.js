import React from 'react';
import { BlockList } from '../BlockList/BlockList';
import { Context } from './../../context/Context';
import { useContext } from 'react';

export const Main = () => {
  //   Задание:
  // Получите значение Контекста в компоненте Main
  // Отобразите его в параграфе

  const { string } = useContext(Context);
  return (
    <div className='div__elem'>
      Main
      <p>{string}</p>
      <BlockList />
    </div>
  );
};
