import React from "react";
import "./App.scss";
import profileImg from "./images/january.jpg";
import Nav, { SideBar } from "./components/Nav";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    profile: {
      user: "January O'Brien",
      profileImg: profileImg,
    },
    todoList: [
      {
        id: 1,
        title: "Pick up clothes from cleaners",
        description: "your description",
        completed: false,
      },
      {
        id: 2,
        title: "Order groceries for the week",
        description: "your description",
        completed: false,
      },
      {
        id: 3,
        title: "Clean out garage",
        description: "your description",
        completed: true,
      },
    ],
  };
  render() {
    return (
      <>
        <Nav profile={this.state.profile} />
        <div style={styles.container}>
          <SideBar />
          <TodoItem todoList={this.state.todoList} />
        </div>
        <div style={styles.newtask}>
          <input type="text" />
          <button style={styles.button}>Add new Task</button>
        </div>
      </>
    );
  }
}

export default App;
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  newtask: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "5%",
    
  },
  button: {
    marginLeft: "33%",
    marginTop:"4%",
    width: "25%",
    padding: "4%",
    fontSize: "10px",
    fontWeight:"bolder",
    color: "#D8E1FF",
    backgroundColor: "#DBBADD",
    borderRadius: "50%",
  },
};
