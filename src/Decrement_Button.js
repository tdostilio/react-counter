import React from 'react';
import Counter from './Counter.js';


const DecrementButton = ({changeHandler}) => (
    <button className = "decrement-button" 
    onClick={ ()=>{
        {changeHandler(-1)}}
    }>-</button>
)


export default DecrementButton;
