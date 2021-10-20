import React, { useContext } from "react";
import "./TodoItem.css";

import { TodoContext } from "../TodoContext/";

import CompleteIcon from "../CompleteIcon";
import DeleteIcon from "../DeleteIcon";

function TodoItem({ text, completed }) {
  const { completeTodo, deleteTodo } = useContext(TodoContext);

  const handleCompleteClick = () => {
    completeTodo(text);
  };
  const handleDeleteClick = () => {
    deleteTodo(text);
  };

  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={handleCompleteClick} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={handleDeleteClick} />
    </li>
  );
}
export default TodoItem;
