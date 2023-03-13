import { useState } from 'react';

function App() {
  // const [state, setState] = useState();

  // state - eto sostojanije kotoroje mozet peredavat absolutno liubije dannije
  // setState - eto funkcija kotorija perezapisivajet state i zastavliajet komponent obnovitsia

  // Pravilo naminga
  // post    setPost
  // product setProduct
  let [count, setCount] = useState(0);

  // Funkcija nadle vizivajet setState setCount, kotorij perezapisivajet znacenije state count i obnovliajet
  let handle = () => {
    setCount(++count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handle}>Click!</button>
    </div>
  );
}

export default App;
