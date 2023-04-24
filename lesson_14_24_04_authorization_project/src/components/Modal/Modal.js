import React from 'react';
import s from './Modal.module.css';

const Modal = ({ active, setActive }) => {
  return (
    <div className={`${s.modal} ${active && s.active}`}>
      <div className={`${s.modal_content} ${active && s.active}`}>
        <button onClick={() => setActive(false)}>X</button>
      </div>
    </div>
  );
};

export default Modal;
