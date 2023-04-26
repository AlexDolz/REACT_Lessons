import React from 'react';
import s from './Modal.module.css';
import { Routes, Route } from 'react-router-dom';
import FormElem from '../FormElem/FormElem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ active, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={`${s.modal} ${active && s.active}`}
    >
      <div
        onClick={event => event.stopPropagation()}
        className={`${s.modal_content} ${active && s.active}`}
      >
        <FontAwesomeIcon
          onClick={() => setActive(false)}
          className={s.x_mark}
          icon={faXmark}
        />
        <Routes>
          <Route
            path='/reg'
            element={
              <FormElem
                title={'Registration'}
                link={'/login'}
                input={{
                  email: 'Email',
                  password: 'Password',
                  secondPassword: 'Enter password one more time',
                }}
                button={{ redirect: 'Login', submit: 'Register' }}
                infoText={
                  'By registering on the site, you agree to privacy and consent to the newsletter'
                }
                type={'reg'}
              />
            }
          />
          <Route
            path='/login'
            element={
              <FormElem
                title={'Login'}
                link={'/reg'}
                input={{
                  email: 'Email',
                  password: 'Password',
                  secondPassword: 'Enter password one more time',
                }}
                button={{ redirect: 'Registration', submit: 'Login' }}
                infoText={'Enter your account username and password'}
                type={'login'}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Modal;
