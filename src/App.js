import React from 'react';
import './App.scss';

function App() {
  return (
      <div className="App">
      <h1>ToDo App</h1>
      <div className="task-items">
      {/* <img className="check" alt="check-button" src="./check.jpg"/> */}
      <input type="checkbox" checked></input>
      <input type="text"></input>
      {/* <form id ="to-do-form">
        <input type="text" placeholder= "Enter Task"/>
        <button type= "submit">Add</button>
        <img alt="trash-logo" src="./trash.jpg"/>
        <input type="text" placeholder= "Enter Task"/>
        <button type= "submit">Add</button>
        <img alt="trash-logo" src="./trash.jpg"/>
        <input type="text" placeholder= "Enter Task"/>
        <button type= "submit">Add</button>
        <img alt="trash-logo" src="./trash.jpg"/>
        <input type="text" placeholder= "Enter Task"/>
        <button type= "submit">Add</button>
        <img alt="trash-logo" src="./trash.jpg"/>
      </form> */}
      </div>
      {/* <div className="bottomnav"></div> */}
      <div className="list"><img alt="list=logo" src="./list.png"/></div>
      <div className="calendar"><img alt="calendar-logo" src="./Calendar.png"/></div>
      <div className="setting"><img alt="setting-logo" src = "./settings.png"/></div>
    </div>
  );
}

export default App;
