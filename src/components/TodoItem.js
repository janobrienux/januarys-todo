import React from "react";

function TodoItem(props) {
const handleDeleteTodo = ()=> props.onDeleteTodo(props.todo.id);
  
  return (


    
            <li key={props.todo.id} style={styles.todoInfo}>
              <p style={props.todo.completed ? styles.todoCompleted : styles.todoItem}>{props.todo.title}</p>
              <button onClick={handleDeleteTodo}>Delete</button>
              <input
                className="todoChecked"
                style={styles.checkbox}
                type="checkbox"
                checked={props.todo.completed}
                onChange={()=>props.onCheckTodo(props.todo.id)}
              />
            </li>
  )
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
