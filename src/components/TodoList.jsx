import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  // 登録されているtodoを保持する
  const [todos, setTodos] = useState([]);

  // 引数(オブジェクト)をtodosに追加してstateを更新する
  const addTodo = (todo) => {
    // inputされた値がnullの場合と空白が連続している場合は追加処理の前にreturnする
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // 追加したTodoを現在のstateに追加して配列を作り、stateを更新する
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  // 渡されたidと一致するtodoを取り除いたtodosを作成しstateを更新する
  const removeTodo = (id) => {
    // filterでidが一致しないものだけreturnする
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  // 渡されたidと一致するtodoのisCompleteパラメータを反転する
  const competeTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        // https://qiita.com/kjirou/items/65a781318b6506687fd3
        // todoのパラメータを変更したいため無視。 .eslintにルール追加
        // eslint-disable-next-line no-param-reassign
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  // todoの編集フォームからsubmitされた時の処理
  // newValueはTodoForm => Todo => TodoListのように渡される
  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // prevは直前のstateを示す
    // この中から、idが一致するtodoのstateをnewValueに更新する
    setTodos((prev) => prev.map((todo) => (todo.id === id ? newValue : todo)));
  };

  // 保持されたTodoリストと、入力フォームを表示する
  return (
    <div className="todo-list">
      {/* addTodoにaddTodo(関数)を入れて渡す */}
      <TodoForm addTodo={addTodo} />
      {/* Todoコンポーネントに更新したTodoListを渡す(todos={todos}) */}
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
