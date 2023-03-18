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
    let newUser = [...users];
    newUser.forEach(elem => (elem.salary = Math.round(elem.salary * 1.1)));

    setUsers([...newUser]);
  };

  return (
    <div>
      <div>
        <button onClick={addEmplHandle}>Add new user</button>
        <button onClick={remLastEmplHandle}>Delete last user</button>
        <button onClick={addSalaryEmplHandle}>Salary on 10%</button>
      </div>
      <div>
        {users.map(elem => (
          <UserInfo key={elem.id} name={elem.name} salary={elem.salary} />
        ))}
      </div>
    </div>
  );
}

export default App;
