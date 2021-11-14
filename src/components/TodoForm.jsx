import React, { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onSubmit({
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
      <h2>{input}</h2>
    </form>
  );
};

export default TodoForm;
