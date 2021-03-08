import React, {Component} from "react"
import Showcase from "../../components/Showcase/Showcase"
import ShowcaseName from "../../components/Showcase/ShowcaseName/ShowcaseName"
import Aux from "../../hoc/Auxillary/Auxillary"

class Layout extends Component{
    state={
        name:"",
        show:"",
        display:true
    }

    inputNameHandler=(e)=>{
        this.setState({name: e.target.value })
    }

    changeNameHandler=()=>{
        let personName= "Anonymous"
        if(this.state.name.length > 0){
            personName = this.state.name
        }
        this.setState({show: personName, display:false})
    }
    
    
    render(){
        return(
            <Aux>
                <Showcase name={this.state.show}/>
                <ShowcaseName 
                change={this.inputNameHandler} 
                nameHandle={this.changeNameHandler}
                show={this.state.display}
                />

                <main> {this.props.children}</main> 
            </Aux>
        )
    }
}




export default Layout