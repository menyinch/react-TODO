import React from "react";

import { FiCheck, FiTrash } from "react-icons/fi";

import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <FiCheck className="Icon-svg Icon-svg--check" color={color} />
  ),
  delete: (color) => (
    <FiTrash className="Icon-svg Icon-svg--delete" color={color} />
  ),
};

const TodoIcon = ({ type, color = "gray", onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};

export default TodoIcon;
