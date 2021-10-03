import React from 'react'
import { Todo } from '../components/Todo' ;


export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-Center">Todos List</h3>
            {props.todos.map((todo)=>{
                return <Todo todo={todo} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}
