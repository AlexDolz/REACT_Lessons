import React from 'react';
import './App.css';
import ProductListPage from './components/ProductListPage';
import { Routes, Route, Link } from 'react-router-dom';
const App = () => {
  let categories = [1, 2, 3, 4, 5];

  return (
    <div>
      <div>
        <Link to={'/allproducts'}>
          <button>All products</button>{' '}
        </Link>
        <Link to={'/productswithsale'}>
          <button>Products with sale</button>
        </Link>

        <div>
          {categories.map(elem => (
            <Link key={elem} to={`/category/${elem}`}>
              <button>{elem}</button>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Routes>
          <Route
            path='/category/:id'
            element={<ProductListPage type={'cat'} />}
          ></Route>
          <Route
            path='/allproducts'
            element={<ProductListPage type={'all'} />}
          ></Route>
          <Route
            path='/productswithsale'
            element={<ProductListPage type={'sale'} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
