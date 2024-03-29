import React, { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import { Link } from 'react-router-dom';
import Modal from './components/Modal/Modal';

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Link to={'/login'}>
        <Button
          onClick={() => setActive(true)}
          title={'Registration / Login'}
          color={'yellow'}
        />
      </Link>
      <Modal setActive={setActive} active={active} />
    </div>
  );
};

export default App;
