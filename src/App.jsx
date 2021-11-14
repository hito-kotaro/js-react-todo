import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const title = 'TodoList!App';
  return (
    <div>
      <h1>{title}</h1>
      <TodoList />
    </div>
  );
};

export default App;
