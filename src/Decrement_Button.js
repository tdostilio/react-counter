import React from 'react';
import Counter from './Counter.js';


const DecrementButton = ({changeHandler}) => (
    <button className = "decrement-button" 
    onClick={changeHandler}>-</button>
)


export default DecrementButton;
