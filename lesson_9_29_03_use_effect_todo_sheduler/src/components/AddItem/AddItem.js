import s from './AddItem.module.css';

const AddItem = ({ addTodo }) => {
  const addHandle = event => {
    if (event.key === 'Enter') {
      addTodo(event.target.value);
    }
  };

  return (
    <div className={s.input__container}>
      <input onKeyDown={addHandle} className={s.input__elem}></input>
    </div>
  );
};

export default AddItem;
