import React, { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import { Link } from 'react-router-dom';
import Modal from './components/Modal/Modal';

// Реализовать в компоненте Modal кнопку 'X', который закроет моадльное окно

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Link to={'/reg'}>
        <Button
          onClick={() => setActive(true)}
          title={'Authorization'}
          color={'yellow'}
        />{' '}
      </Link>
      <Modal setActive={setActive} active={active} />
    </div>
  );
};

export default App;
