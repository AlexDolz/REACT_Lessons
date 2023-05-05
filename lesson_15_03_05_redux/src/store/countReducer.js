const defaultState = {
  count: 0,
};

// Sozdajom peremennije ctobi v sluiciaje osibki zapisi, uvideli osibku, inace esli string to ne uvidim osibki v browsere
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD';
const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD';

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'INCR':
    //   return { ...store, count: store.count + 1 }; // { ...store, count: store.count + 1 } ...store - cto bi ne poteriat nikakoje znacenije, esli bi ih bilo bolse
    // case 'DECR':
    //   return { ...store, count: store.count - 1 };
    // case 'INCR_100':
    //   return { ...store, count: store.count + 100 };
    // case 'DECR_100':
    //   return { ...store, count: store.count - 100 };
    case INCR_BY_PAYLOAD:
      return { ...state, count: state.count + action.payload };
    case DECR_BY_PAYLOAD:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

// Action generator
export const incrByPayloadAction = payload => ({
  type: INCR_BY_PAYLOAD,
  payload,
});

export const decrByPayloadAction = payload => ({
  type: DECR_BY_PAYLOAD,
  payload,
});
