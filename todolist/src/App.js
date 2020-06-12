import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component() {

  constructor(props){
    super(props)
    this.state = {
      isClicked: false
    };
  }
  

  render(){

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.state.isClicked}></button>

      </header>
    </div>
  );
  }

}

export default App;
