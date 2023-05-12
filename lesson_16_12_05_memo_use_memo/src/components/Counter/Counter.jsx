import React from 'react';

let render = 0;

const Counter = ({ value }) => {
  console.log(`Component Counter was updated ${++render} times`);

  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

export default Counter;
