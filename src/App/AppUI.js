import React, { useContext } from "react";

//Components
import TodoCounter from "../TodoCounter/";
import TodoSearch from "../TodoSearch/";
import TodosError from "../TodosError/";
import TodosLoading from "../TodosLoading/";
import EmptyTodos from "../EmptyTodos";
import TodoList from "../TodoList/";
import TodoForm from "../TodoForm/";
import Modal from "../Modal/";
import CreateTodoButton from "../CreateTodoButton/";

import { TodoContext } from "../TodoContext/";

const AppUI = () => {
  const { error, loading, searchedTodos, openModal, setOpenModal } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {error && <TodosError error={error} />}
      {loading && <TodosLoading />}
      {!loading && !searchedTodos.length && <EmptyTodos />}
      <TodoList todos={searchedTodos} />

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default AppUI;
