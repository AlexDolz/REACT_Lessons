import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css';

const TodoList = ({ todos, changeTodo, removeTodo }) => {
  return (
    <div className={s.todos__wrapper}>
      {todos.map(elem => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
