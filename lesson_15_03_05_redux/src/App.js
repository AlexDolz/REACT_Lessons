import './App.css';
import Count from './components/Count';
import Workers from './components/Workers';
import Users from './components/Users';
import Cart from './components/Cart';
import Example from './components/Example';

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

const App = () => {
  return (
    <div>
      <Count />
      <Workers />
      <Users />
      <Cart />
      <Example />
    </div>
  );
};

export default App;
