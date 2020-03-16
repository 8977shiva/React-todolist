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
      list: [],

      Edit: "",
     
      toggle: true
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("edit", this.state.Edit);
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.todo.length > 0) {
      this.setState({ todo: "", list: [...this.state.list, this.state.todo] });
    } else {
      alert("add something");
    }
  };
  // delete
  handleDelete = i => {
    console.log("index", this.state.list[i]);
    let item = this.state.list[i];
    let filteredList = this.state.list.filter(i => i !== item);
    console.log(filteredList);
    this.setState({ list: filteredList });
  };
  //edit
  handleEdit = (i,event)=> {
  //  console.log('item',item)
 
    if (this.state.toggle) {
      this.setState({ toggle: false });
      
    } else {
      this.setState({ toggle: true });
       
      this.setState({ Edit: this.state.Edit });
       
      if (this.state.Edit.length > 0) {
        this.state.list.splice(i, 1, this.state.Edit)
          this.setState({Edit:''});
      }
    }
    //span
  
  };

  render() {
    return (
      <div className="App">
        <h1>Todolist</h1>
        <TodoInput
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Todolist
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          toggle={this.state.toggle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          Edit={this.state.Edit}
          test={this.state.test}
        />
      </div>
    );
  }
}

export default App;
