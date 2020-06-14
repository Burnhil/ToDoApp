import React from 'react';

function ToDoList(props) {
    //test statement to console
    console.log("this is todolist props", props.items);
    //returning list to be rendered by dome after inserting of todo items
    return(
        <div>
            <h1>To Do List</h1>
            <ul>
                {/**using map() to render array each time it is updated to show full list */}
                {props.todos.map((item, index)=>{
                return <li key={index}>{props.todos[index]}
                {/**added button for remove item */}
                <button className="removeItem">Delete</button>
                </li>
                })}
            </ul>
        </div>

    )
}

  export default ToDoList;