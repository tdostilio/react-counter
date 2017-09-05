import React from 'react';
import Counter from './Counter.js';



const IncrementButton = ({changeHandler}) => {
    return (
        <button className="increment-button" 
      onClick={changeHandler}>+</button>
    )

}


export default IncrementButton;