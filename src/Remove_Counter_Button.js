import React from 'react';


const RemoveCounterButton = ({changeHandler}) => {
    return (
        <button className="remove-counter-button" onClick={changeHandler}>Remove Counter</button>
    )
}


export default RemoveCounterButton;