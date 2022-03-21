import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, flg } = props;
  return (
    <>
      <div style={style}>
        <input
          disabled={flg}
          placeholder="TODO入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={flg} onClick={onClick}>
          Add
        </button>
      </div>
    </>
  );
};
