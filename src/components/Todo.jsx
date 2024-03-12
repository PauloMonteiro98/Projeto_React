import React from "react"

export const Todo = ({ todo }) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
        <div>
          <button className="complete">Completar</button>
          <button className="remove">X</button>
        </div>
      </div>
    </div>
  );
};

