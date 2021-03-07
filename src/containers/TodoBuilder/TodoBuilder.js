import React, {Component} from "react"
import TodoForm from "../../components/TodoForm/TodoForm"
import ToDoItem from "../../components/ToDoItem/ToDoItem"
import classes from "./TodoBuilder.module.css"
class TodoBuilder extends Component{
    state={
        input:"",
        toDo:[]
    }

    formSubmitHandler = (e) =>{
        e.preventDefault()
       
    }

    inputHandler= (e)=>{
        this.setState({input: e.target.value}) 
    }

    toDoListHandler= () =>{

        if(this.state.input !== ""){
            const toDoItem ={
                id: Math.floor(Math.random()*10000),
                text: this.state.input,
                done: false
            }

            const newTodo= [...this.state.toDo, toDoItem]
            this.setState({toDo: newTodo, input:""})
        }
    }

    render(){
        
        let toDoItems= "adamsin sen"
        if (this.state.toDo !== []){
            toDoItems=this.state.toDo.map(item =>{
                return <li key={item.id}>
                <ToDoItem    
                    text={item.text}
                    />
                </li>
            })
        }
       
        return(
            <div className={classes.TodoBuilder}>
                <TodoForm submit = {this.formSubmitHandler}
                 input={this.inputHandler} 
                 toDoList={this.toDoListHandler}
                 value={this.state.input}
                 />
                <ul>
                    {toDoItems}
                </ul>
            </div>
        )
    }
}

export default TodoBuilder