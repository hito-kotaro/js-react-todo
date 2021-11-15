/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = (props) => {
  const [edit, setEdit] = useState({ id: null, value: '' });
  const { todos } = props;
  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <>
      <div
        key={todo.id}
        onClick={() => props.completeTodo(todo.id)}
        style={todo.isComplete ? { color: 'red' } : { color: 'blue' }}
      >
        {todo.text}
      </div>
      <div className="icons" key={todo.id * 10}>
        <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </>
  ));
};
export default Todo;
