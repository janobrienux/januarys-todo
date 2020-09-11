import React from "react";

function TodoItem({ todoList }) {
  const handleCheckTodo = (id) => todoList.onCheckedTodo(todoList.todoItem.id);
  return (
    <div style={styles.taskContainer}>
      <p style={styles.todoItem}>Task List:</p>
      <ul style={styles.todoItem}>
        {todoList.map((todo) => {
          return (
            <li key={todo.id} style={styles.todoInfo}>
              <p style={todo.completed ? styles.todoCompleted : styles.todoItem}>{todo.title}</p>
              <button>Delete</button>
              <input
                className="todoChecked"
                style={styles.checkbox}
                type="checkbox"
                checked={todo.completed}
                onChange={handleCheckTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoItem;

const styles = {
  todoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    listStyle: "none",
    color: "#BE92A2",
    fontSize: "16px",
    textAlign: "center",
  },
  todoInfo: {
    border: "solid",
    borderColor: "#D8E1FF",
    borderRadius: "30%",
    width: "40%",
    padding: "4%",
    margin: "4%",
    fontSize: "10px",
  },
  todoCompleted: {
    textDecoration: "line-through",
    color: "#D8E1FF",
    fontSize: "16px",
  },
  taskContainer: {},
  checkbox: {
    backgroundColor: "#fafafa",
    border: "1px solid #BE92A2",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    padding: "9px",
    borderRadius: "20%",
    display: "inline-block",
    position: "relative",
  },
};
