import React from "react";
import { useState } from "react";
import styles from './AllTodoStyles.module.css';

export const TodoInput = ({ handleClick }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <div className={`${styles.todo_input_container}`}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter Todo's"
        />
        <button
          onClick={() => {
            handleClick(text, setText(""));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
