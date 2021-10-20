import React from "react";
import TodoIcon from "../TodoIcon/";

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon
      type="check"
      color={completed ? "3dcaf50" : "gray"}
      onClick={onComplete}
    />
  );
};

export default CompleteIcon;
