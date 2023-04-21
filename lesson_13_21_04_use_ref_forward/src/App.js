import React from 'react';
import Header from './component/Header/Header';
import './App.css';
import Block1 from './component/Block1/Block1';
import Block2 from './component/Block2/Block2';
import { useRef } from 'react';

const App = () => {
  let block1Ref = useRef();
  let block2Ref = useRef();

  return (
    <div>
      <Header />
      <Block1 ref={block1Ref} />
      <Block2 ref={block2Ref} />
    </div>
  );
};

// Homework, pri nazatiji elemnta v header sdelat autoscroll do nuznogo div

export default App;
