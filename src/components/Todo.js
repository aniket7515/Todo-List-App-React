import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return (
        <div>
            <h4>{Todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
                
           
        </div>
    )
}
