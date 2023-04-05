import React from 'react';
import s from './GoodsItem.module.css';
import { Link } from 'react-router-dom';

const GoodsItem = ({ title, price, description, image, id, count }) => {
  return (
    <div className={s.goods__item}>
      <Link to={`/goods/${id}`}>
        <h2>{`${id}. ${title}`}</h2>
      </Link>
      <h4>{price} $</h4>
      <img src={image} alt='product__img' />
      <p>{description}</p>
      <p>{`${count} items.`}</p>
    </div>
  );
};

export default GoodsItem;
