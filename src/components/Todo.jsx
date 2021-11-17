/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = (props) => {
  const [edit, setEdit] = useState({ id: null, value: '' });
  // TodoListから渡されたpropsの中からtodosを取り出す
  const { todos } = props;

  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  // editがtrueになったら入力フォームを表示する
  // AddTodoがクリックされた時はsubmitUpdateを実行する
  // addTodoにsubmitUpdateを入れて渡す
  if (edit.id) {
    return <TodoForm edit={edit} addTodo={submitUpdate} />;
  }

  // TodoListから受け取ったtodosをmap関数で表示する
  return todos.map((todo) => (
    // Consoleにエラーが出るのでkeyを追加
    <div key={todo.id * 100}>
      <div
        key={todo.id}
        onClick={() => props.completeTodo(todo.id)}
        onKeyDown={() => props.completeTodo(todo.id)}
        style={todo.isComplete ? { color: 'red' } : { color: 'blue' }}
      >
        {todo.text}
      </div>
      <div className="icons" key={todo.id * 10}>
        <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </div>
  ));
};
export default Todo;
