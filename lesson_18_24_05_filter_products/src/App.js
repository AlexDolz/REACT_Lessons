import React from 'react';
import Filter from './components/Filter';
import ProductsList from './components/ProductsList';
import './App.css';

const App = () => {
  return (
    <div>
      <Filter />
      <ProductsList />
    </div>
  );
};

export default App;
