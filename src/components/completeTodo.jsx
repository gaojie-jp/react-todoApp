import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>Return</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
