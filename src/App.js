import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import AddCounterButton from './Add_Counter_Button.js';
import RemoveCounterButton from './Remove_Counter_Button.js';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            componentList: [<Counter/>] 
        }
    }

  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{this.state.componentList}</div>
        <AddCounterButton
          changeHandler={this._AddCounter}/>
        <RemoveCounterButton
          changeHandler={this._RemoveCounter}/>
      </div>
    )}

  _AddCounter = (e) => {
        e.preventDefault();
        this.setState({
            componentList: this.state.componentList.concat([<Counter/>])
        })
    } 
  
  _RemoveCounter = (e) => {
        e.preventDefault();
        this.setState({
            componentList: this.state.componentList.slice(0,this.state.componentList.length-1)
        })
    }   
  
}

export default App;
