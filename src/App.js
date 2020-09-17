import React from "react";
import "./App.scss";
import shortid from "shortid";

import profileImg from "./components/images/january.jpg";
import Nav, { SideBar } from "./components/Nav";
import TodoItem from "./components/TodoItem";
import Greeting from "./components/Greeting";












class App extends React.Component {
  state = {
    profile: {
      user: "January O'Brien",
      profileImg: profileImg,
    },
    todoList: [
      {
        id: shortid.generate(),
        title: "Pick up clothes from cleaners",

        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Order groceries for the week",

        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Clean out garage",
        completed: true,
      },
    ],
    newTodoDescription: "",
  };

  handleChangeNewTodo = (event) => {
    const value = event.target.value;
    this.setState({ newTodoDescription: value });
  };
  handleAddNewTodo = () => {
    this.setState((state) => {
      return {
        todoList: [...state.todoList, { id: shortid.generate(), title: state.newTodoDescription, completed: false }],
        newTodoDescription: "",
      };
    });
  };
  handleCheckTodo = (id) => {
    this.setState((state) => {
      let newList = state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { todoList: newList };
    });
  };
  handleDeleteTodo = (id) => {
    this.setState((state) => {
      let filteredList = state.todoList.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      return { todoList: filteredList };
    });
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
            <ul style={styles.todoItem}>
              {this.state.todoList.map((todo) => {
                return <TodoItem todo={todo} onDeleteTodo={this.handleDeleteTodo}/>;
              })}
            </ul>
          </div>

          <div style={styles.newtask}>
            <input
              style={styles.input}
              onChange={this.handleChangeNewTodo}
              value={this.state.newTodoDescription}
              type="text"
            />
            <button
              style={styles.button}
              onClick={this.handleAddNewTodo}
              
            >
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

  newtask: {
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
