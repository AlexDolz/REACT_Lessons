import { Main } from './components/Main/Main';
import './App.css';
import { useState } from 'react';
import { Context } from './context/Context';

const App = () => {
  let [string, setString] = useState('Some text');

  return (
    <div>
      <Context.Provider value={{ string }}>
        App
        <p>{string}</p>
        <Main />
      </Context.Provider>
    </div>
  );
};

export default App;
