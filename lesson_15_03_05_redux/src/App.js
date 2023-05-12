import { useDispatch, useSelector } from 'react-redux';
import { decrByPayloadAction, incrByPayloadAction } from './store/countReducer';
import {
  addNewEmplAction,
  changeAgeAction,
  delEmplByIdAction,
  delFirstEmplAction,
  delLastEmplAction,
  resetAgeAction,
} from './store/emplReducer';
import './App.css';
import { addNewUserAction, delUserAction } from './store/userReducer';
import { fetchUserById, fetchUsersList } from './asyncActions/users';
import { useEffect } from 'react';
import {
  addNewProductCartAction,
  decrCountCartProductAction,
  incrCountCartProductAction,
} from './store/cartReducer';

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

const App = () => {
  let count = useSelector(store => store.count.count);

  let empl = useSelector(store => store.empl);

  let users = useSelector(store => store.users.users);

  let cart = useSelector(store => store.cart);

  console.log(cart);
  // Otpravliajet komandi v reducer na izmenenija hranilisia (store)
  let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsersList());
  // }, []); // cto bi dannije s UserList srazu peredavalis pri zagruzke stranici pisem useEffect

  // LocarStorage for Cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h2>{count}</h2>

        <button onClick={() => dispatch(decrByPayloadAction(1))}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(1))}>
          Increment
        </button>

        <button onClick={() => dispatch(decrByPayloadAction(100))}>
          Decrement - 100
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(100))}>
          Increment + 100
        </button>

        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>
          Remove N
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>
          Add N
        </button>
      </div>

      <div>
        <h2>Workers</h2>
        <button onClick={() => dispatch(delFirstEmplAction())}>
          Delete first worker
        </button>
        <button onClick={() => dispatch(delLastEmplAction())}>
          Delete last worker
        </button>
        <button onClick={() => dispatch(addNewEmplAction(prompt()))}>
          Add new worker
        </button>
        <div>
          {empl.map(elem => (
            <div
              onDoubleClick={() => dispatch(delEmplByIdAction(elem.id))}
              key={elem.id}
            >
              <p title='DoubleClick to remove empl.'>
                {elem.name} {elem.age}
              </p>
            </div>
          ))}
          <button onClick={() => dispatch(changeAgeAction(10))}>
            Change Age
          </button>
          <button onClick={() => dispatch(resetAgeAction(0))}>
            Reset Age to 0
          </button>
        </div>
      </div>
      <div>
        <h2>Users</h2>
        <button onClick={() => dispatch(addNewUserAction(prompt()))}>
          Add new user
        </button>
        <button onClick={() => dispatch(fetchUsersList())}>
          Add Users list (Async)
        </button>
        <button onClick={() => dispatch(fetchUserById(prompt()))}>
          Add User by id (Async)
        </button>
        <ul>
          {users.map((elem, index) => (
            <li onClick={() => dispatch(delUserAction(elem.id))} key={index}>
              {elem.name}
            </li>
          ))}
        </ul>
      </div>
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

export default App;
