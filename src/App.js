import React from 'react';
import './App.scss';



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
const profile = {
  user: "Bill",
  profileImg: "https://www.fillmurray.com/640/360"
};

function App() {
  return (
        <>
      <div className="App">
          <div className="user-info">
            {profile.user}
            <img alt="bill" src={profile.profileImg}/>
          </div>
      <h1>Task List</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <li>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <input type="checkbox" checked={todo.completed}/>
            </li>
          );
        })}
      </ul>
        <div className="bottom-nav">
        <div className="list"><img alt="list=logo" src="./list.png"/></div>
        <div className="calendar"><img alt="calendar-logo" src="./Calendar.png"/></div>
         <div className="setting"><img alt="setting-logo" src = "./settings.png"/></div>
       </div>
    </div>
  </>
  );
}
export default App;



