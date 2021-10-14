import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { Cap } from "./Capitalize.js";

export const Todo = () => {
  const [todoData, setTodoData] = useState([]);

  const handleClick = (text) => {
    let capText = Cap(text);
    const payload = {
      title: capText,
      status: false,
      id: nanoid(4),
    };

    setTodoData([payload, ...todoData]);
  };

  return (
    <div>
      <div>
        <TodoInput handleClick={handleClick} />
      </div>
      <div>
        <TodoList todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
};
