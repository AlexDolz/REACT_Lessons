import { useState } from 'react';
import UserInfo from './UserInfo';

function App() {
  const data = [
    {
      id: 1,
      name: 'Alex',
      salary: 1500,
    },
    {
      id: 2,
      name: 'Steven',
      salary: 2000,
    },
    {
      id: 3,
      name: 'Neena',
      salary: 1000,
    },
    {
      id: 4,
      name: 'John',
      salary: 4500,
    },
    {
      id: 5,
      name: 'King',
      salary: 400,
    },
  ];

  let [users, setUsers] = useState(data);

  const addEmplHandle = () => {
    // let newUsers = users.slice(); // delajem kopiju massiva so slice, a ne ssilku, tak ze mozno sdelat [...users]
    // newUsers.push({ id: Date.now(), name: prompt(), salary: prompt() });
    // setUsers(newUsers);

    // 2 solution
    let newUser = { id: Date.now(), name: prompt(), salary: prompt() };
    setUsers([...users, newUser]); // mozno i tak [newUser, ...users] togda budet dobavliajtsia v nacale
  };

  // Задание: сформировать кнопку, которая должна будет удалить последний элемент массива

  // 1) Cоздать копию массива users (чтобы учесть данные до обновления) (см правило выше)
  // 2) Изменить копию массива согласно ТЗ
  // 3) Указать измененный массив (копия!!!) в сетСтейт

  const remLastEmplHandle = () => {
    let newUser = [...users];
    newUser.pop();

    setUsers(newUser);
  };

  const addSalaryEmplHandle = () => {
    let newSalary = [...users];
    newSalary.forEach(elem => (elem.salary = Math.round(elem.salary * 1.1)));

    setUsers(newSalary);
  };
  // 2 Solution with map
  // const addSalaryEmplHandle2 = () => {
  //   let newSalary = users.map(elem => ({
  //     ...elem,
  //     salary: Math.round(elem.salary * 1.1),
  //   }));

  //   setUsers(newSalary);
  // };

  const deleteUserById = id => {
    let newUsers = users.filter(elem => elem.id != id);
    setUsers(newUsers);
  };

  // Задание: реализовать кнопку, которая будет удалять элементы по ID
  // Примечание: id должен указываться в модальном окне

  // Доп. задание: внутри функции deleteUserByModal сделать проверку на существование элемента
  // При указании неизвестного ID необходимо вызвать alert с сообщение о том, что пользователя не существует
  // В противном случае найденного пользователя нужно удалить

  const deleteUserByModal = () => {
    let modalResult = +prompt('Enter ID');
    const usersId = users.map(elem => elem.id);
    if (usersId.includes(modalResult)) {
      deleteUserById(modalResult);
    } else {
      alert('User is not defined');
    }

    // let newUsers = users.filter(elem => elem.id != modalResult);
    // setUsers(newUsers);
  };
  // 2 Solution
  // const deleteUserByModal2 = () => {
  //   let modalResult = +prompt('Enter ID');
  //   const foundUser = users.find(elem => elem.id == modalResult);
  //   if (foundUser) {
  //     deleteUserById(modalResult);
  //   } else {
  //     alert('User is not defined');
  //   }

  //   // let newUsers = users.filter(elem => elem.id != modalResult);
  //   // setUsers(newUsers);
  // };

  return (
    <div>
      <div>
        <button onClick={addEmplHandle}>Add new user</button>
        <button onClick={remLastEmplHandle}>Delete last user</button>
        <button onClick={addSalaryEmplHandle}>Salary on 10%</button>
        {/* <button onClick={() => deleteUserById(3)}>Delete User test</button> */}
        <button onClick={deleteUserByModal}>Delete User by Modal</button>
      </div>
      <div>
        {users.map(elem => (
          <UserInfo
            key={elem.id}
            name={elem.name}
            salary={elem.salary}
            id={elem.id}
            deleteUserById={deleteUserById}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
