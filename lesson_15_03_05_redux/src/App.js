import { useDispatch, useSelector } from 'react-redux';
import { decrByPayloadAction, incrByPayloadAction } from './store/countReducer';
import {
  addNewEmplAction,
  changeAgeAction,
  delEmplByIdAction,
  delFirstEmplAction,
  delLastEmplAction,
  resetAgeAction,
} from './store/emplReducer';
import './App.css';

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

const App = () => {
  let count = useSelector(store => store.count.count);

  let empl = useSelector(store => store.empl);

  // Otpravliajet komandi v reducer na izmenenija hranilisia (store)
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h2>{count}</h2>

        <button onClick={() => dispatch(decrByPayloadAction(1))}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(1))}>
          Increment
        </button>

        <button onClick={() => dispatch(decrByPayloadAction(100))}>
          Decrement - 100
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(100))}>
          Increment + 100
        </button>

        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>
          Remove N
        </button>
        <button onClick={() => dispatch(incrByPayloadAction(+prompt()))}>
          Add N
        </button>
      </div>

      <div>
        <h2>Workers</h2>
        <button onClick={() => dispatch(delFirstEmplAction())}>
          Delete first worker
        </button>
        <button onClick={() => dispatch(delLastEmplAction())}>
          Delete last worker
        </button>
        <button onClick={() => dispatch(addNewEmplAction(prompt()))}>
          Add new worker
        </button>
        <div>
          {empl.map(elem => (
            <div
              onDoubleClick={() => dispatch(delEmplByIdAction(elem.id))}
              key={elem.id}
            >
              <p title='DoubleClick to remove empl.'>
                {elem.name} {elem.age}
              </p>
            </div>
          ))}
          <button onClick={() => dispatch(changeAgeAction(10))}>
            Change Age
          </button>
          <button onClick={() => dispatch(resetAgeAction(0))}>
            Reset Age to 0
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
