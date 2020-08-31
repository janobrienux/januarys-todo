import React from 'react';
import './App.scss';
import profileImg from "./images/january.jpg"

const profile = {
  user: "January O'Brien",
  profileImg: profileImg,
};


const todoList = [{
  title: "Pick up clothes from cleaners",
  description: "your description",
  completed: false
},
{
  title: "Order groceries for the week",
  description: "your description",
  completed: false
},
{
  title: "Clean out garage",
  description: "your description",
  completed: true
}];


function App() {
  return (
        <>
      <div className="App">
          <nav style={styles.topNav}>
            <img alt="january" src={profile.profileImg} style={styles.topNavAvatar}></img>
            <h3 style={styles.topNavUserName}>{profile.user}</h3>
          </nav>
      <h1>Task List:</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <li>
              <span>{todo.title}</span>
              <span>{todo.description}</span>
              <input type="checkbox" checked={todo.completed}/>
            </li>
          );
        })}
      </ul>
    </div>
  </>
  );
}
const styles = {
  topNav:{
    height: "4 rem",
    backgroundColor:"#A41623",
    display:"flex",
    justifyContent:"space-between",
  },
  topNavAvatar:{
    height:"80px",
    width:"80px",
    borderRadius:"50%",
  },
  topNavUserName:{
    color:"#FFD29D",
    fontSize:"28px",
  },
}

export default App;



