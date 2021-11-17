import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const title = 'MyTodoList';
  return (
    <div className="todo-app">
      <h1>{title}</h1>
      <TodoList />
    </div>
  );
};

export default App;
