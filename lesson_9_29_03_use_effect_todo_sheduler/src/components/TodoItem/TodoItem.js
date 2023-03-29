import s from './TodoItem.module.css';

const TodoItem = ({ id, title, completed, changeTodo, removeTodo }) => {
  // 1 Задание:
  // Используя проп complited, сформируйте цвет background оп следующему правилу
  // Если complited true - тогда цвет фона должен быть зеленой
  // В противном случае красный

  const itemStyles = {
    background: completed ? 'green' : 'red',
  };

  return (
    <div
      className={s.todo__elem}
      style={itemStyles}
      onClick={() => changeTodo(id)}
      onDoubleClick={() => removeTodo(id)}
    >
      <h2>{title}</h2>
      <p>{'' + completed}</p>
    </div>
  );
};

export default TodoItem;
