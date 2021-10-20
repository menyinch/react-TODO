import React, { useContext, useState } from "react";

import { TodoContext } from "../TodoContext";

import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar la cebolla para el almuerzo"
        value={newTodoValue}
        onChange={handleChange}
      ></textarea>
      <div className="TodoForm__button-container">
        <button
          className="TodoForm__button TodoForm__button-cancel"
          type="button"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm__button TodoForm__button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
