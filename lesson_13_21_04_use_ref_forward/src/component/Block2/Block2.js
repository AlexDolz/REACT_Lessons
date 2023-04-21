import React from 'react';
import './Block2.css';
import { forwardRef } from 'react';

const Block2 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='block2'>
      Block2
    </div>
  );
});

export default Block2;
