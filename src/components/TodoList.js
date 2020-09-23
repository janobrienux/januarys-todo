import React from "react";
import TodoItem from './TodoItem'

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
      profile: {
        user: "January O'Brien",
        profileImg: profileImg,
      },
      newTodoDescription: "",
    };
  }
  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        todoList: JSON.parse(todoListStr),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let todoListStr = JSON.stringify(this.state.todoList);
    localStorage.setItem(TODO_LIST_KEY, todoListStr);
  }

  handleChangeNewTodo = (event) => {
    const value = event.target.value;
    this.setState({ newTodoDescription: value });
  };
  handleAddNewTodo = () => {
    this.setState((state) => {
      return {
        todoList: [...this.state.todoList, { id: shortid.generate(), title: this.state.newTodoDescription, completed: false }],
        newTodoDescription: "",
      };
    });
  };
  handleCheckTodo = (id) => {
    this.setState((state) => {
      let newList = this.state.todoList.map((item) => {
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
      let filteredList = this.state.todoList.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      return { todoList: filteredList };
    });
  
  render(){
    return (
    <ul style={styles.todoList}>
    {this.state.todoList.map((todo) => (
      <TodoItem todo={todo}/>
  
    ))}
        </ul>
        )
  }
      


export default TodoList;

const styles = {
  todoList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    listStyle: "none",
    color: "#BE92A2",
    fontSize: "16px",
    textAlign: "center",
  },
};
