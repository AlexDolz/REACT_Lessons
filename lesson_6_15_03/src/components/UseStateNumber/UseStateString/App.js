import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState('red');
  let [size, setSize] = useState('');

  const colorHandle = () => {
    setColor('blue');
  };

  const sizeHandle = () => {
    setSize('big');
  };

  return (
    <div>
      <div className={`item ${size}`} style={{ backgroundColor: color }}></div>
      <button onClick={colorHandle}>Change background on blue</button>
      <button onClick={sizeHandle}>Increase the size</button>
    </div>
  );
}

export default App;
