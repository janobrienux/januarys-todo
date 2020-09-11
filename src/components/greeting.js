import React from "react";

export class Greeting extends React.Component {
  state = {
    hour: null,
    username: "January",
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour,
    });
  };

  render() {
    const { hour, username } = this.state;
    return (
      <div className="App">
        <h2>{hour < 12 ? `Good Morning ${username}` : `Good evening ${username}`}</h2>
      </div>
    );
  }
}
export function TaskGreeting(props) {
  const todoList = props.todoList;
  let greetingMessage = todoList === 3 ? "You have a few task to complete" : "You have lots of tasks to complete";

  return <p>{greetingMessage}</p>;
}

export default Greeting;
