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

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const competeTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.isComplete = !todo.isComplete;
        console.log(`id=${todo.id},isComplete=${todo.isComplete}`);
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div>
      {/* onSubmitを実行した時に、親要素のaddTodoが実行される */}
      <TodoForm onSubmit={addTodo} />
      <h1>{msg}</h1>
      <Todo
        todos={todos}
        completeTodo={competeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
