import React from 'react';


const AddCounterButton = ({changeHandler}) => {
    return (
        <button className="add-counter-button" onClick={changeHandler}>Add Counter</button>
    )
}


export default AddCounterButton;