const data = [
  {
    id: 1,
    title: 'Bicycle',
    count: 5,
  },
  {
    id: 2,
    title: 'Scooter',
    count: 4,
  },
  {
    id: 3,
    title: 'Dumbbells',
    count: 7,
  },
  {
    id: 4,
    title: 'Rackets',
    count: 1,
  },
];

// Esli JSON.parse(localStorage.getItem('cart')) verniot null ili undefined togda k defaultState primenitsia znacenije peremennoj data. Esli JSON.parse(localStorage.getItem('cart')) budet otlicim ot null ili undefine toda virazenije defaultState budet hranit rezultat raboti JSON.parse(localStorage.getItem('cart'))
const defaultState = JSON.parse(localStorage.getItem('cart')) ?? data;

const INCR_COUNT_CART_PRODUCT = 'INCR_COUNT_CART_PRODUCT';
const DECR_COUNT_CART_PRODUCT = 'DECR_COUNT_CART_PRODUCT';
const ADD_NEW_PRODUCT_CART = 'ADD_NEW_PRODUCT_CART';

const incrProductHandler = (array, id) => {
  return array.map(elem => {
    if (elem.id === id && elem.count < 25) {
      elem.count++;
    }
    return elem;
  });
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCR_COUNT_CART_PRODUCT:
      return incrProductHandler(state, action.payload.id);

    case DECR_COUNT_CART_PRODUCT:
      if (state[action.payload.index].count === 1) {
        return state.filter(elem => elem.id !== action.payload.id);
      } else {
        return state.map(elem => {
          if (elem.id === action.payload.id && elem.count > 0) {
            elem.count--;
          }
          return elem;
        });
      }

    case ADD_NEW_PRODUCT_CART:
      const findElem = state.find(elem => elem.title === action.payload);
      if (findElem) {
        return incrProductHandler(state, findElem.id);
      } else {
        const newProductCart = {
          id: Date.now(),
          title: action.payload,
          count: 1,
        };
        return [...state, newProductCart];
      }
    default:
      return state;
  }
};

export const incrCountCartProductAction = (id, index) => ({
  type: INCR_COUNT_CART_PRODUCT,
  payload: { id, index },
});
export const decrCountCartProductAction = (id, index) => ({
  type: DECR_COUNT_CART_PRODUCT,
  payload: { id, index },
});
export const addNewProductCartAction = payload => ({
  type: ADD_NEW_PRODUCT_CART,
  payload,
});
