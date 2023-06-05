import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllProductList,
  fetchProductListByCategory,
} from '../store/asyncActions/productList';
import { useParams } from 'react-router-dom';
import { rootUrl } from '..';

const ProductListPage = ({ type }) => {
  const { id } = useParams();

  const titlePage = useSelector(store => store.productList.titlePage);
  const productList = useSelector(store => store.productList.productList);
  let dispatch = useDispatch();
  // console.log(titlePage, productList);

  useEffect(() => {
    if (type === 'cat') {
      dispatch(fetchProductListByCategory(id));
    } else {
      dispatch(fetchAllProductList(type));
    }
  }, [id, type]);

  useEffect(() => {
    document.title = titlePage.title;
  }, [titlePage]);

  return (
    <div>
      <h2>{titlePage.title}</h2>
      <div className='product_wrapper'>
        {productList.map(elem => (
          <div key={elem.id}>
            <img src={`${rootUrl}${elem.image}`} width={100} height={100} />
            <p>{elem.title}</p>
            <p>{elem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
