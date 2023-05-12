import React from 'react';

let render = 0;

const Burden = ({ value }) => {
  console.log(`Component Burden was updated ${++render} times`);

  const burdenHandler = () => {
    // Iskustvennaja nagruzka
    for (let i = 0; i < 1000000000; i++) {
      let a = '123';
    }
    return 'Component Burden';
  };

  return (
    <div>
      <p>{burdenHandler()}</p>
    </div>
  );
};

export default Burden;
