import React from "react";
import "./App.scss";
import shortid from "shortid";

import profileImg from "./components/images/january.jpg";
import Nav, { SideBar } from "./components/Nav";
import TodoItem from "./components/TodoItem";
import Greeting from "./components/Greeting";

const TODO_LIST_KEY = "todoApp_list";
class App extends React.Component {
      profile: {
      user: "January O'Brien",
      profileImg: profileImg,
    }
  };

  render() {
    return (
      <>
        <Nav profile={this.state.profile} />
        <Greeting todoList={this.state.todoList} />

        <div style={styles.container}>
          <SideBar />
          <div style={styles.taskContainer}>
            <p style={styles.todoItem}>Task List:</p>
            <TodoItem
              todo={this.state.todoList}
              onCheckTodo={this.handleCheckTodo}
              onDeleteTodo={this.handleDeleteTodo}
            />
            ;
          </div>

          <div style={styles.newTask}>
            <input
              style={styles.input}
              onChange={this.handleChangeNewTodo}
              value={this.state.newTodoDescription}
              type="text"
            />
            <button style={styles.button} onClick={this.handleAddNewTodo}>
              Add new Task
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },

  newTask: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "5%",
    padding: "10%",
  },
  button: {
    marginLeft: "28%",
    marginTop: "4%",
    width: "25%",
    padding: "4%",
    fontSize: "10px",
    fontWeight: "bolder",
    color: "#D8E1FF",
    backgroundColor: "#DBBADD",
    borderRadius: "50%",
  },
  input: {
    width: "80%",
    height: "100px",
    borderColor: "#D8E1FF",
    color: "#BE92A2",
    borderRadius: "20%",
  },
};
