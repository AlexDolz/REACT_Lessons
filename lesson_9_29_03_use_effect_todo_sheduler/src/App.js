import AddItem from './components/AddItem/AddItem';
import TodoList from './components/TodoList/TodoList';
import { useEffect, useState } from 'react';

const App = () => {
  const startTodos = [
    {
      id: 1,
      title: 'First task',
      completed: true,
    },
    {
      id: 2,
      title: 'Second task',
      completed: false,
    },
    {
      id: 3,
      title: 'Third task',
      completed: false,
    },
  ];

  let [todos, setTodos] = useState(startTodos);

  // 2 задание:
  // Напишите функцию, которая будет меня сво-во complited (с true на false, false на true)
  // по клику на элемент

  const changeTodo = id => {
    const newTodo = todos.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setTodos(newTodo);
  };

  // 3 Задание:
  // Напишите функцию, которая по двойному клику на элемент его удалит

  const removeTodo = id => {
    const newTodo = todos.filter(elem => elem.id !== id);
    setTodos(newTodo);
  };

  // Task to add new todo
  const addTodo = title => {
    const todo = {
      id:
        Math.max(...todos.map(elem => elem.id)) + 1 === -Infinity
          ? 1
          : Math.max(...todos.map(elem => elem.id)) + 1,
      // Math.max(...todos.map(elem => elem.id)) + 1 < 0 the same
      //   ? 1
      //   : Math.max(...todos.map(elem => elem.id)) + 1,
      title: title,
      completed: false,
    };
    setTodos([todo, ...todos]);
  };

  // ------------- useEffect + localStorage
  useEffect(() => {
    let todosItem = JSON.parse(localStorage.getItem('todos')) || todos;
    setTodos(todosItem);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <AddItem addTodo={addTodo} />
      <TodoList todos={todos} changeTodo={changeTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
