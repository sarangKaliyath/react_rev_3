import React from "react";
import styles from "./AllTodoStyles.module.css";

export const TodoItems = ({ title, status, id, handleToggle }) => {
  return (
    <div className={styles.todo_items}>
      <h3>{title}</h3>
      <button
        className={`${styles.todo_items_button} ${
          status ? styles.todo_task_done : styles.todo_task_not_done
        }`}
        onClick={() => {
          handleToggle(id);
        }}
      ></button>
    </div>
  );
};
