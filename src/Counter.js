import React, { Component } from 'react';
import IncrementButton from './Increment_Button.js';
import CounterValue from './Counter_Value.js';
import DecrementButton from './Decrement_Button.js';

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
                <div>
                <IncrementButton
                    changeHandler={this._AddValue}
                />
                <DecrementButton
                    changeHandler={this._SubtractValue}
                />
                </div>
            </div>
        );
    }

    _AddValue = (amt) => {
        this.setState({
            value: this.state.value + amt
        })
    } 
    _SubtractValue = (amt) => {
        this.setState({
            value: this.state.value + amt
        })
    } 
}


export default Counter;