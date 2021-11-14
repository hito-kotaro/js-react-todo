/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Todo = (todos) => {
  // eslint-disable-next-line no-unused-vars
  const test = 'Todo';
  const todoArray = todos.todos;
  todoArray.map((todo) => console.log(todo.id));
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      {todoArray.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
};
export default Todo;
