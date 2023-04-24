import React from 'react';
import './Header.css';

const Header = ({ scrollToBlock1, scrollToBlock2 }) => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className='menu__wrapper'>
        <p onClick={scrollToBlock1}>Block1</p>
        <p onClick={scrollToBlock2}>Block2</p>
      </div>
    </div>
  );
};

export default Header;
