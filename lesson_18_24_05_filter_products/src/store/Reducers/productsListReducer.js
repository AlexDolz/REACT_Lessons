const defaultState = [];

const ADD_PRODUCTS_LIST = 'ADD_PRODUCTS_LIST';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE';
const FILTER_PRODUCTS_BY_COUNT = 'FILTER_PRODUCTS_BY_COUNT';

export const productsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_LIST:
      const newState = action.payload.map(elem => ({
        ...elem,
        showBySale: true,
        showByCount: true,
      }));
      return newState;
    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map(elem => {
          if (!(elem.rating.rate >= 4)) {
            elem.showBySale = false;
          }
          return elem;
        });
      } else {
        return state.map(elem => ({ ...elem, showBySale: true }));
      }
    case FILTER_PRODUCTS_BY_COUNT:
      if (action.payload) {
        return state.map(elem => {
          if (!(elem.rating.count > 350)) {
            elem.showByCount = false;
          }
          return elem;
        });
      } else {
        return state.map(elem => ({ ...elem, showByCount: true }));
      }
    default:
      return state;
  }
};

export const addProductListAction = payload => ({
  type: ADD_PRODUCTS_LIST,
  payload,
});
export const filterProducsBySaleAction = payload => ({
  type: FILTER_PRODUCTS_BY_SALE,
  payload,
});
export const filterProducsByCountAction = payload => ({
  type: FILTER_PRODUCTS_BY_COUNT,
  payload,
});
