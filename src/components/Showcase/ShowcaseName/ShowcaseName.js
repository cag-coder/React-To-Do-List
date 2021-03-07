import React from "react"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Auxillary/Auxillary"
import classes from "./ShowcaseName.module.css"

const showcaseName= (props) =>(
    <Aux>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={classes.ShowcaseName}
        style={{
            transform: props.show ? "translate(-50%,-50%)" : "translate(-50%,-100vh)",
            opacity: props.show? "1": "0"
        }}>
            <h1>Enter Your Name</h1>    
            <input placeholder="Hi :)"onChange={props.change} type="text"/>
            <button onClick={props.nameHandle}>Let's Go</button>

        </div>
    </Aux>
)

export default showcaseName