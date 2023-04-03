import React from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.not__found__section}>
      <img
        src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg'
        alt='error'
      ></img>
    </div>
  );
};

export default NotFoundPage;
