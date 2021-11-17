/* eslint-disable react/forbid-prop-types */
// ↑PropTypesで型をarrayを指定でいるように

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = (props) => {
  const [edit, setEdit] = useState({ id: null, value: '' });
  // TodoListから渡されたpropsの中からtodosを取り出す
  const { todos } = props;

  // 親要素のupdateTodoに更新対象のtodoのidと更新後の内容valueを渡して、現在のstateを初期化する
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
    return <TodoForm className="edit" edit={edit} addTodo={submitUpdate} />;
  }

  // TodoListから受け取ったtodosをmap関数で表示する
  return todos.map((todo) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={todo.id}
    >
      {/* divにonClickを適用しているから、役割が適切でない的なエラーが出る roleを入れてあげる必要がある? */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="todo-text"
        onClick={() => props.completeTodo(todo.id)}
        // onKeyDownを入れないとESLintでエラーになる。キーボード操作の時の配慮らしい
        onKeyDown={() => props.completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => props.removeTodo(todo.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
