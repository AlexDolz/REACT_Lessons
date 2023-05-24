import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../asyncActions/productsList';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.productsList).filter(
    elem => elem.showBySale && elem.showByCount
  );

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  console.log(products);
  return (
    <div className='products__wrapper'>
      {products.map((elem, index) => (
        <div key={index}>
          <img src={elem.image} width={100} height={100} />
          <p style={{ color: elem.rating.rate >= 4 ? 'red' : 'black' }}>
            {elem.price}$
          </p>
          <p>{elem.title}</p>
          <p>{elem.rating.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
