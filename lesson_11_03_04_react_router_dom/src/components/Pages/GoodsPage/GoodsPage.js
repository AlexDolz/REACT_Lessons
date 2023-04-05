import React, { useEffect, useState } from 'react';
import s from './GoodsPage.module.css';
import GoodsList from '../../GoodsList/GoodsList';

const GoodsPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Goods online shopping</h1>
      <div className={s.goods__section}>
        <GoodsList products={products} />
      </div>
    </div>
  );
};

export default GoodsPage;
