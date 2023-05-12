import React from 'react';

let render = {
  count1: 0,
  count2: 0,
};

const Counter = ({ value, elem }) => {
  console.log(
    `Component Counter (${elem}) was updated ${++render[elem]} times`
  );

  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

export default Counter;
