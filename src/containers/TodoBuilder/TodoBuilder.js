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
                finished: false
            }

            const newTodo= [...this.state.toDo, toDoItem]
            this.setState({toDo: newTodo, input:""})
        }
    }

    deleteToDoHandler=(id)=>{
        const toDo= [...this.state.toDo]
        const newTodo= toDo.filter(item => item.id !== id)
        this.setState({toDo: newTodo})
    }

    completedToDoHandler = (id) =>{
        const element = this.state.toDo.findIndex(el => el.id === id )
        const toDo= [...this.state.toDo]
        toDo[element] ={
            ...toDo[element],
            finished:true
        }
        this.setState({toDo : toDo})
   
    }

    render(){
        
    
        const toDoItems=this.state.toDo.map(item =>{
                return <li key={item.id}>
                <ToDoItem    
                    text={item.text}
                    delete={() => this.deleteToDoHandler(item.id)}
                    complete ={() => this.completedToDoHandler(item.id)}
                    finished = {item.finished}
                    />
                </li>
            })
       
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