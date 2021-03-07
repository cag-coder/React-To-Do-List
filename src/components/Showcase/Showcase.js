import React from "react"
import classes from "./Showcase.module.css"

const showcase = (props) =>(

    <div className={classes.Showcase}>
        <h1>{props.name}'s Todo List </h1>
    </div>
    
)

export default showcase