import React, {Component} from "react"
import './App.css'
import Layout from "./containers/Layout/Layout"
import TodoBuilder from "./containers/TodoBuilder/TodoBuilder"

class App extends Component{

  render(){
    return (
      <div className="App">
        <Layout>
          <TodoBuilder/>
        </Layout>
      </div>

    );
  }
}

export default App;