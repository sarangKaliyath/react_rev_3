import React from "react";
import { TodoItems } from "./TodoItems";

export const TodoList = ({ todoData, setTodoData }) => {
  const handleToggle = (id) => {
    let newData = todoData.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );

    setTodoData(newData);
  };

  return (
    <div>
      {todoData.map((el) => {
        return <TodoItems key={el.id} {...el} handleToggle={handleToggle} />;
      })}
    </div>
  );
};
