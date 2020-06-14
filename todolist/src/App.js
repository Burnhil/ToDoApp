import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList.js'


class App extends Component {
  //setting the state and variables to be used
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      todos: []
    }
  }

  //setting up a true false toggle on orginal button
  // toggle = () => {
  //   this.setState({isON: !this.state.isON})
  // }

  //when onclicked from form is done setting variable input to user input
  inputUpdate = (event) =>{
    this.setState({input: event.target.value})
  };

  
  formSubmit = (event) =>{
    //holding page to only update a single component
    event.preventDefault()
    //print to console the user input for reference
    console.log("this is item stored", this.state.todos)
    //adding the user input to array by pushing it to the end of the list
    this.setState({
      todos : [...this.state.todos, this.state.input],
      //reset user input field to be blank
      input: ""
    })
  };



  render () {
    //console.log("this is state = ", this.state.isON)
    return (
      <div className = "App">
        <header className="App-header">
        {/**setting up form for input from user and button to pull data to store in array todos[] */}
        <form onSubmit ={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          <button>Submit</button>
        </form>

        {/**calling ToDoList class to update list */}
        <ToDoList todos={this.state.todos}/>
        </header>
      </div>
    );
  }

}

export default App;
