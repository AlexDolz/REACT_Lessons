import { rootUrl } from '../..';
import {
  productListByCategoryAction,
  productListBySaleAction,
} from '../productListReducer';

export function fetchProductListByCategory(id) {
  return function (dispatch) {
    fetch(`${rootUrl}/categories/${id}`)
      .then(res => res.json())
      .then(data => dispatch(productListByCategoryAction(data)));
  };
}

export function fetchAllProductList(type) {
  return function (dispatch) {
    fetch(`${rootUrl}/products/all`)
      .then(res => res.json())
      .then(data => {
        dispatch(productListByCategoryAction({ data, category: {} }));
        if (type === 'sale') {
          dispatch(productListBySaleAction());
        }
      });
  };
}
