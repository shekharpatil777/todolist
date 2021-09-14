import React from "react";

const ToDoLists = (props)=>{

    return (
        <>
        <div>
        
        <li>
        <i 
        className="fa fa-times" 
        aria-hidden="true" 
        onClick={ () =>{props.onSelect(props.id);
        }} 
        />  {props.text}</li>
        </div>
        </>
        );
};

export default ToDoLists;