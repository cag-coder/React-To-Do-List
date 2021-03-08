import React from "react"
import classes from "./ToDoItem.module.css"
const toDoItem = (props) =>(
    <div className={classes.ToDoItem} done={props.done}>
        <p className={props.finished ? classes.Completed : null}> {props.text}</p>
        <div >
            <button onClick={props.complete} ><i className="far fa-check-square"></i></button>
            <button className={classes.active} onClick={props.delete} ><i className="fas fa-trash-alt"></i></button>
        </div>
    </div>
)


export default toDoItem

