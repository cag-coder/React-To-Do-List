import React from "react"
import classes from "./TodoForm.module.css"

const todoForm = (props) =>(
    <div className={classes.TodoForm}>
        <form onSubmit={props.submit}>
            <input type="text" onChange={props.input} value={props.value}/>
            <button type="submit" onClick={props.toDoList}>
               <i className="fas fa-plus-circle"></i>
            </button>
        </form>
    </div>
)

export default todoForm