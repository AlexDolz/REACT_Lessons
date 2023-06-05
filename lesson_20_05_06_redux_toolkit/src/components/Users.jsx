import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewUserAction,
  delUserAction,
} from '../store/oldReduxReducers/userReducer';
import { fetchUserById, fetchUsersList } from '../asyncActions/users';

const Users = () => {
  let users = useSelector(store => store.users.users);
  let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsersList());
  // }, []); // cto bi dannije s UserList srazu peredavalis pri zagruzke stranici pisem useEffect

  return (
    <div>
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
    </div>
  );
};

export default memo(Users);
