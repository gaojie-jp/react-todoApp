import React from "react";

export const InCompleteTodo = (props) => {
  const { incompleteTodos, onClickFinish, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            /**
             * Loopでレンダリングする場合、
             * 何個名の要素なのかを比較ために
             * 必ずkeyの設定してください。
             */
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickFinish(index)}>Finish</button>
              {/* 関数に引数を渡しタイときに、アロー関するにしてください。 */}
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
