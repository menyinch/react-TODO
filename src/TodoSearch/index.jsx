import React, { useContext } from "react";

import "./TodoSearch.css";

import { TodoContext } from "../TodoContext/";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleValueChange = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Cebolla"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </>
  );
};

export default TodoSearch;
