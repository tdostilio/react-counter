import React from 'react';
import Counter from './Counter.js';



const IncrementButton = ({changeHandler}) => {
    return (
        <button className="increment-button" 
      onClick={()=> {
          changeHandler(1)
        }}>+</button>
    )
}


export default IncrementButton;