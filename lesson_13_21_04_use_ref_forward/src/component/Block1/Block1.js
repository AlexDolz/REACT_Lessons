import React from 'react';
import './Block1.css';
import { forwardRef } from 'react';

const Block1 = forwardRef((props, ref) => {
  // props obiazatelno nuzno propisat ili _ nizneje podciorkivanije
  return (
    <div ref={ref} className='block1'>
      Block1
    </div>
  );
});

export default Block1;
