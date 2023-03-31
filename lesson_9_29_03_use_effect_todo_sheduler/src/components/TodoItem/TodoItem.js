import s from './TodoItem.module.css';
import { useContext } from 'react';
import { TodoContext } from './../../context/TodoContext';

const TodoItem = ({ id, title, completed }) => {
  // 1 Задание:
  // Используя проп complited, сформируйте цвет background оп следующему правилу
  // Если complited true - тогда цвет фона должен быть зеленой
  // В противном случае красный

  let { changeTodo } = useContext(TodoContext);
  let { removeTodo } = useContext(TodoContext);

  const itemStyles = {
    background: completed ? 'green' : 'red',
  };
  const status = completed ? 'completed' : 'not completed';

  return (
    <div
      className={s.todo__elem}
      style={itemStyles}
      onClick={() => changeTodo(id)}
      onDoubleClick={() => removeTodo(id)}
    >
      <h2>{title}</h2>
      <p>{status}</p>
    </div>
  );
};

export default TodoItem;
