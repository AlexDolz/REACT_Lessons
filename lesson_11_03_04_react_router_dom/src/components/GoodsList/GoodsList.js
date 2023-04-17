import React from 'react';
import s from './GoodsList.module.css';
import GoodsItem from '../GoodsItem/GoodsItem';
import { useNavigate } from 'react-router-dom';

const GoodsList = ({ products }) => {
  const navigate = useNavigate();

  const goForward = () => {
    navigate(1); // on one step forward
  };
  return (
    <div>
      <button className={s.button} onClick={goForward}>
        Forward
      </button>
      <div className={s.goods__list}>
        {products.map((elem, index) => (
          <GoodsItem key={index} {...elem} count={elem.rating.count} />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
