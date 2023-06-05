import {
  addNewUsersListAction,
  fetchAddNewUserAction,
} from '../store/oldReduxReducers/userReducer';

// Asinhronnij zapros formirujetsia v vide funckiji, kotoraja vozvrasiajet druguju anonimnuju funkciju. Vnutri anonimnoj funkciji vipolniajetsia zapros,kotorij posle polucenija rezultata vizivajet generator action i peredajot sam rezultat v kacestve argumenta
export const fetchUsersList = () => {
  return function (dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(addNewUsersListAction(data)));
  };
};

export const fetchUserById = id => {
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(fetchAddNewUserAction(data)));
  };
};
