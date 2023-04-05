import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GoodInfoPage = () => {
  let [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt='itemImg' />
    </div>
  );
};

export default GoodInfoPage;
