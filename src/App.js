import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TodoInput from "./component/todoInput.component";
import Todolist from "./component/todolist.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: []
    };
  }
  handleChange = event => {
    this.setState(
      { todo: event.target.value },
      console.log("g", this.state.todo)
    );
  };
  handleSubmit = event => {
    event.preventDefault();
  

    this.setState({ todo: "", list: [...this.state.list, this.state.todo] });
  };
  handleDelete=(i)=> {
    console.log("index" ,this.state.list[i])
     let item= this.state.list[i]
      let filteredList=this.state.list.filter((i)=>i!==item)
      console.log(filteredList)
    this.setState({ list: filteredList });
  }
  render() {
    return (
      <div className="App">
        <TodoInput
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* {  this.state.list.map(m=><h1>{m}</h1>)} */}
         
        <Todolist list={this.state.list}  handleDelete={this.handleDelete}     />
      </div>
    );
  }
}

export default App;
