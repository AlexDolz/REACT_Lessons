import React from 'react';
import s from './GoodsList.module.css';
import GoodsItem from '../GoodsItem/GoodsItem';

const GoodsList = ({ products }) => {
  return (
    <div className={s.goods__list}>
      {products.map((elem, index) => (
        <GoodsItem key={index} {...elem} count={elem.rating.count} />
      ))}
    </div>
  );
};

export default GoodsList;
