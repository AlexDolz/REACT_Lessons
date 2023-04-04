import React from 'react';
import s from './GoodsItem.module.css';

const GoodsItem = ({ title, price, description, image }) => {
  return (
    <div className={s.goods__item}>
      <h2>{title}</h2>
      <h4>{price} $</h4>
      <img src={image} alt='product__img' />
      <p>{description}</p>
    </div>
  );
};

export default GoodsItem;
