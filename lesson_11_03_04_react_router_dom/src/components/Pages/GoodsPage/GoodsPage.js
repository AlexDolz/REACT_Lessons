import React, { useEffect, useState } from 'react';
import s from './GoodsPage.module.css';

const GoodsPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={s.goods__section}>
      {products.map((elem, index) => {
        <div key={index} {...elem}></div>;
      })}
      <h1>Goods online shopping</h1>
    </div>
  );
};

export default GoodsPage;
