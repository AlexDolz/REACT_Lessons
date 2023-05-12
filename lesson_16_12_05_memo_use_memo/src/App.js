import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Burden from './components/Burden/Burden';

const App = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  return (
    <div>
      <div className='div__elem'>
        <Counter elem={'count1'} value={counter1} />
        <button onClick={() => setCounter1(++counter1)}>+</button>
      </div>
      <div className='div__elem'>
        <Counter elem={'count2'} value={counter2} />
        <button onClick={() => setCounter2(++counter2)}>+</button>
      </div>
      <Burden value={counter2} />
    </div>
  );
};

export default App;
