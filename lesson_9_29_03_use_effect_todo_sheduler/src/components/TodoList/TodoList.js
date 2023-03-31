import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css';

const TodoList = ({ todos }) => {
  return (
    <div className={s.todos__wrapper}>
      {todos.map(elem => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
