import './App.css';
import Count from './components/Count';
import Workers from './components/Workers';
import Users from './components/Users';
import Cart from './components/Cart';
import PostList from './components/PostList';

// Добавить в reducer 2 кейса, которые будут добавлять и убавлять значение стейта на 100
// На стороне компонента сделать 2 кнопки

const App = () => {
  return (
    <div>
      <Count />
      <Workers />
      <Users />
      {/* <Cart /> */}
      <PostList />
    </div>
  );
};

export default App;
