/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    // 親要素のaddTodoを実行して、addTodoを実行している
    // こいつは、Todo,TodoListどちらからも渡されている
    // なんか気持ち悪いけどreactではOK
    console.log(props);
    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        onChange={handleChange}
        placeholder="TodoForm"
      />
      <button onClick={handleSubmit} type="button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
