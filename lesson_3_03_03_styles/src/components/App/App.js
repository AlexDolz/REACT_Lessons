// Vse komponenti unasledujut stili iz App.css
// import './App.css';

// Dostup k stiliam polucit tolko komponent App is App.module.css
import Block from '../Block/Block';
import style from './App.module.css';

function App() {
  return (
    <div>
      <div className={`${style.item} ${style.yellow}`}>123</div>
      <Block />
    </div>
  );
}

export default App;
