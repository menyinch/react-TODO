import React from "react";

//Assets
import "./CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal, openModal }) => {
  const handleClick = (msg) => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button
        className={openModal ? "CloseCreateTodoButton" : "OpenCreateTodoButton"}
        onClick={() => handleClick("Abrir Modal")}
      >
        +
      </button>
    </>
  );
};

export default CreateTodoButton;
