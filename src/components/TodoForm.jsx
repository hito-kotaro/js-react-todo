/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
  const { edit } = props; // 分割代入で取得しないとESLintに怒られる(destructuring-assignment)
  const [input, setInput] = useState(edit ? edit.value : ''); // editがnullでなければ、初期値は既存のvalue

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // こいつは、Todo,TodoListどちらからも渡されている
    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {edit ? (
        <>
          {/* 編集のidがtrueの時は編集用の入力フォームを表示する */}
          <input
            className="todo-input edit"
            value={input}
            type="text"
            onChange={handleChange}
          />
          <button
            className="todo-button edit"
            onClick={handleSubmit}
            type="button"
          >
            Edit Todo
          </button>
        </>
      ) : (
        <>
          {/* そうでない場合は、新規登録用のフォームを出力する */}
          <input
            className="todo-input"
            value={input}
            type="text"
            onChange={handleChange}
            placeholder="input todo"
          />
          <button className="todo-button" onClick={handleSubmit} type="button">
            Add Todo
          </button>
        </>
      )}
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  edit: PropTypes.func,
};

export default TodoForm;
