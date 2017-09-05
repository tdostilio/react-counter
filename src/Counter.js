import React, { Component } from 'react';
import IncrementButton from './Increment_Button.js';
import CounterValue from './Counter_Value.js';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    render () {
        return (
            <div>
                <CounterValue
                    value={this.state.value}
                    />
                <IncrementButton
                    changeHandler={this._UpdateValue}
                />
            </div>
        );
    }

    _UpdateValue = (e) => {
        e.preventDefault();
        this.setState({
            value: this.state.value + 1
        })
    } 
}


export default Counter;