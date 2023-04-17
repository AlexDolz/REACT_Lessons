import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from './GoodInfoPage.module.css';

const GoodInfoPage = () => {
  let [item, setItem] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // on step back
  };

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className={s.goods__info__page}>
      <button onClick={goBack}>Back</button>
      <button onClick={goHome}>Home</button>

      <h1>{item.title}</h1>
      <h3>{item.rating?.rate}</h3>
      <img src={item.image} alt='itemImg' />
    </div>
  );
};

export default GoodInfoPage;
