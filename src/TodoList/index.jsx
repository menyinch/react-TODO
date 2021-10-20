import React from "react";

//Components
import TodoItem from "../TodoItem/index";

//Assets
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.text} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
