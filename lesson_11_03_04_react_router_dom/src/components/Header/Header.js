import React from 'react';
import s from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={s.header__wrapper}>
      <div className={s.logo}></div>
      <button className={s.button} onClick={goBack}>
        Back
      </button>
      <div className={s.menu__wrapper}>
        <a href='/'>Homepage</a>
        <a href='/goods'>Goods</a>
        <a href='/about'>About</a>
        <a href='/contacts'>Contacts</a>
      </div>
    </div>
  );
};

export default Header;
