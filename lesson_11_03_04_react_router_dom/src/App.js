import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import GoodsPage from './components/Pages/GoodsPage/GoodsPage';
import ContactsPage from './components/Pages/ContactsPage/ContactsPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';

// Задание:
// а)
// Сформировать новый компонент HomePage, который будет хранить
// обычный заголовок с текстом Home Page
// Компонент GoodsPage переписать таким образом, чтобы отображись список товаров
// https://fakestoreapi.com/products'

// б) Донастроить роутинг с учетом всех вышеуказанных изменений
// (предусмотреть изменение в меню)

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/goods' element={<GoodsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
