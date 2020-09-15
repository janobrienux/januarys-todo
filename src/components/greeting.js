import React from "react";

export class Greeting extends React.Component {
  state = {
    hour: null,
    username: "January",
    greeting: "",
  };

  componentDidMount() {
    this.getHour();
    let greetingMessage =
      this.props.todoList.length === 0 ? "You have no task to complete" : "You have lots of tasks to complete";
    this.setState({ greeting: greetingMessage });
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
      <>
        <div style={styles.greeting}>
          <h2>{hour < 12 ? `Good Morning ${username}` : `Good Afternoon ${username}`}</h2>
        </div>
        <p style={styles.greeting}>{this.state.greeting}</p>
      </>
    );
  }
}

export default Greeting;
const styles = {
  greeting: {
    color: "#BE92A2",
    fontSize: "22px",
  },
};
