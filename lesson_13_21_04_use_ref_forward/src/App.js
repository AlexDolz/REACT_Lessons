import React from 'react';
import Header from './component/Header/Header';
import './App.css';
import Block1 from './component/Block1/Block1';
import Block2 from './component/Block2/Block2';
import { useRef } from 'react';

const App = () => {
  let block1Ref = useRef();
  let block2Ref = useRef();

  const scrollToBlock1 = () => {
    block1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBlock2 = () => {
    block2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToBlock1={scrollToBlock1} scrollToBlock2={scrollToBlock2} />
      <Block1 ref={block1Ref} />
      <Block2 ref={block2Ref} />
    </div>
  );
};

export default App;
