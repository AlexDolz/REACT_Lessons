import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  let ulRef = useRef();
  let numberRef = useRef();

  let [number, setNumber] = useState([1, 2, 3, 4, 5]);

  numberRef.current = number;

  // мини задание: напишите функцию, которая будет добавлять в массив новый элемент
  // занчение которого будет - последний элемент + 1

  const addNumber = () => {
    setNumber([...number, number.length + 1]);
  };

  const stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handler);
  };

  const handler = useCallback(
    () => console.log('scroll', number, numberRef.current),
    []
  );

  useEffect(() => {
    ulRef.current.addEventListener('scroll', handler);
  }, []);

  return (
    <div>
      <ul ref={ulRef}>
        {number.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add new element</button>
      <button onClick={stopScroll}>Stop event</button>
    </div>
  );
};

export default App;
