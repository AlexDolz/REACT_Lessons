import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.logo}></div>
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
