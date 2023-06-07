const defaultState = {
  users: [
    { id: 11, name: 'Steven Wilyam' },
    { id: 12, name: 'John Snow' },
    { id: 13, name: 'Neena Stolkovich' },
  ],
};

// 1) Реализовать добавлене нового пользователя через кнопку
// 2) Реализовать удаление сотрудника по событию click

const ADD_NEW_USER = 'ADD_NEW_USER';
const DEL_USER = 'DEL_USER';
const ADD_NEW_USERS_LIST = 'ADD_NEW_USERS_LIST';
const FETCH_ADD_NEW_USER = 'FETCH_ADD_NEW_USER';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      const newUser = {
        id: Date.now(),
        name: action.payload,
      };
      return { ...state, users: [...state.users, newUser] };
    case DEL_USER:
      return {
        ...state,
        users: state.users.filter(elem => elem.id !== action.payload),
      };
    // Esli bi hotel dobavit esio cto to togda return {...state, users: [...state.users.filter(elem => elem.id !== action.payload), {id: 25, name: test}],
    case ADD_NEW_USERS_LIST:
      return { ...state, users: [...state.users, ...action.payload] }; // action.payload eto rezultat fetch zaprosa (novij massiv s dannimi)
    case FETCH_ADD_NEW_USER:
      if (action.payload.id === undefined) {
        alert('False ID');
        return state;
      }
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export const addNewUserAction = payload => ({
  type: ADD_NEW_USER,
  payload,
});
export const delUserAction = payload => ({
  type: DEL_USER,
  payload,
});
export const addNewUsersListAction = payload => ({
  type: ADD_NEW_USERS_LIST,
  payload,
});
export const fetchAddNewUserAction = payload => ({
  type: FETCH_ADD_NEW_USER,
  payload,
});
