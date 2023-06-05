import React, { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProductCartAction,
  decrCountCartProductAction,
  incrCountCartProductAction,
} from '../store/oldReduxReducers/cartReducer';

const Cart = () => {
  let cart = useSelector(store => store.cart);
  let dispatch = useDispatch();

  // LocarStorage for Cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>
        <h2>Cart</h2>
        <button onClick={() => dispatch(addNewProductCartAction(prompt()))}>
          Add new product
        </button>
        <div>
          {cart.map((elem, index) => (
            <div style={{ display: 'flex', gap: '10px' }} key={index}>
              <p>{elem.title}</p>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <button
                  onClick={() =>
                    dispatch(decrCountCartProductAction(elem.id, index))
                  }
                >
                  -
                </button>
                <p>{elem.count}</p>
                <button
                  // disabled={elem.count >= 10} cto bi otkliucit knopku
                  onClick={() =>
                    dispatch(incrCountCartProductAction(elem.id, index))
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Cart);
