import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  // todosは現在ListにあるTodoを保持する
  const [todos, setTodos] = useState([]);
  const msg = 'TodoList';

  // 引数todoはTodoFormから渡されている.
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      {/* onSubmitを実行した時に、親要素のaddTodoが実行される */}
      <TodoForm onSubmit={addTodo} />
      <h1>{msg}</h1>
      <Todo todos={todos} />
    </div>
  );
};

export default TodoList;
