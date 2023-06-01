const defaultState = {
  titlePage: {},
  productList: [],
};

const PRODUCT_LIST_BY_CATEGORY = 'PRODUCT_LIST_BY_CATEGORY';
const PRODUCT_LIST_BY_SALE = 'PRODUCT_LIST_BY_SALE';

export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_CATEGORY:
      if (action.payload.category.title) {
        return {
          titlePage: action.payload.category,
          productList: action.payload.data,
        };
      } else {
        return {
          titlePage: { title: 'All products' },
          productList: action.payload.data,
        };
      }

    case PRODUCT_LIST_BY_SALE:
      return {
        titlePage: { title: 'Product with Sale' },
        productList: state.productList.filter(elem => elem.discont_price),
      };
    default:
      return state;
  }
};

export const productListByCategoryAction = payload => ({
  type: PRODUCT_LIST_BY_CATEGORY,
  payload,
});

export const productListBySaleAction = () => ({
  type: PRODUCT_LIST_BY_SALE,
});
