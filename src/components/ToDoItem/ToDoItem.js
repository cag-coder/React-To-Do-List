import React from "react"
import classes from "./ToDoItem.module.css"
const toDoItem = (props) =>(
    <div className={classes.ToDoItem} done={props.done}>
        <p>{props.text}</p>
    </div>
)


export default toDoItem

