import { createStore } from 'redux';

const defaultStore = {
  count: 0,
};

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
    // case 'INCR':
    //   return { ...store, count: store.count + 1 }; // { ...store, count: store.count + 1 } ...store - cto bi ne poteriat nikakoje znacenije, esli bi ih bilo bolse
    // case 'DECR':
    //   return { ...store, count: store.count - 1 };
    // case 'INCR_100':
    //   return { ...store, count: store.count + 100 };
    // case 'DECR_100':
    //   return { ...store, count: store.count - 100 };
    case 'INCR_BY_N':
      return { ...store, count: store.count + action.payload };
    case 'DECR_BY_N':
      return { ...store, count: store.count - action.payload };

    default:
      return store;
  }
};

export const store = createStore(reducer);
