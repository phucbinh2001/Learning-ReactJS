import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// import "../style.css";

function TodoPage({ todoList, todoOnClick }) {
  const handlerOnClick = (todo, index) => {
    if (!todoOnClick) return;
    todoOnClick(todo, index);
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li
          className={classnames({ completed: todo.isComplete === "done" })}
          onClick={() => handlerOnClick(todo, index)}
          key={todo.id}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

TodoPage.propTypes = {
  todoList: PropTypes.array,
  todoOnClick: PropTypes.func,
};

PropTypes.defaultProps = {
  todoList: [],
  todoOnClick: null,
};

export default TodoPage;
