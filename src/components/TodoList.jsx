import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  // todosは現在配列ににあるTodoを保持する
  const [todos, setTodos] = useState([]);

  // todoはTodoFormから渡られた値 todoの入力値
  const addTodo = (todo) => {
    // 余計な空白を削除する
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // 追加したTodoを現在のstateに追加して配列を作り、stateを更新する
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

  // 保持されたTodoリストと、入力フォームを表示する
  return (
    <div>
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
