import { useDispatch, useSelector } from 'react-redux';

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

const App = () => {
  let count = useSelector(store => store.count);

  // Otpravliajet komandi v reducer na izmenenija hranilisia (store)
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h2>{count}</h2>

        <button onClick={() => dispatch({ type: 'DECR_BY_N', payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'INCR_BY_N', payload: 1 })}>
          Increment
        </button>

        <button onClick={() => dispatch({ type: 'DECR_BY_N', payload: 100 })}>
          Decrement - 100
        </button>
        <button onClick={() => dispatch({ type: 'INCR_BY_N', payload: 100 })}>
          Increment + 100
        </button>

        <button
          onClick={() => dispatch({ type: 'DECR_BY_N', payload: +prompt() })}
        >
          Remove N
        </button>
        <button
          onClick={() => dispatch({ type: 'INCR_BY_N', payload: +prompt() })}
        >
          Add N
        </button>
      </div>
    </div>
  );
};

export default App;
