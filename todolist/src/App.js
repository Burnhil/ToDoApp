import React, { Component, useReducer } from 'react';
import './App.css';


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

  removeToDo = (index) =>{
    //testing index for array item to be removed
    //console.log("index = ", index)

    //create a copy of the current list to be used to set state of list after
    const currentList = Object.assign([], this.state.todos);
    //use splice() to remove single item from array  using index #
    currentList.splice(index, 1)
    //setState of copied list with removed element back to state
    this.setState({todos: currentList})
  }


  render () {
    //console.log("this is state = ", this.state.isON)
    return (
      <div className = "App">
        <header className="App-header">
        <h1>To Do List</h1>
        {/**setting up form for input from user and button to pull data to store in array todos[] */}
        <form onSubmit ={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          <button>Add</button>
        </form>

        <div>
            
            <ul>
                {/**using map() to render array each time it is updated to show full list */}
                {this.state.todos.map((item, index)=>{
                return <li key={index}>{this.state.todos[index]}
                {/**added button for remove item */}
                {/**when using onClick and submit need to add ()=> so event wouldn't trigger when adding causing state transition error*/}
                <button onClick={() => this.removeToDo(index)}>Delete</button>
              
                </li>
                })}
            </ul>
        </div>

        </header>
      </div>
    );
  }

}

export default App;
