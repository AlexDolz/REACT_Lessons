import { useEffect, useState } from 'react';

// useEffect - eto funckcija, kotoraja pozvoliajet vipolniat psevdo process, esli komponent budet perehodit v novoje sostojanije

// Rezimi raboti:

// 1) Vipolnenije processa v moment montirovanija + obnovlenija
// 2) Vipolnenije processa v moment tolko montirovanija
// 3) Vipolnenije processa v moment montirovanija + obnovlenija (ukazav zavisimost izmenenija state)

const App = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  // Pervij rezim raboti
  useEffect(() => {
    console.log('Pervij rezim raboti', 'Montirovanije + obnovlenije');
  });

  // Vtoroj rezim raboti
  useEffect(() => {
    console.log('Vtoroj rezim raboti', 'Tolko montirovanije');
  }, []); // v konce pustoj massiv, togda tolko montirovanije

  // Tretij rezim raboti
  useEffect(() => {
    console.log('Tretij rezim raboti', 'montirovanije + obnovlenije count1');
  }, [count1]);

  // Task1: Напишите useEffect, который будет инкрементировать count1 только в том случае, если будет обновлен count2

  useEffect(() => {
    setCount1(++count1);
  }, [count2]);

  // console.log('Iniciallizacija'); vipolniajetsia vnacale vsegda pri inicializaciji, do useEffect

  return (
    <div>
      <div>
        <h1>{count1}</h1>
        <div>
          <button onClick={() => setCount1(++count1)}>click count1</button>
        </div>
      </div>
      <div>
        <h1>{count2}</h1>
        <div>
          <button onClick={() => setCount2(++count2)}>click count2</button>
        </div>
      </div>
    </div>
  );
};

export default App;
