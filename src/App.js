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
      list2:[],
      Edit: "",
      
      toggle: true
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("edit",this.state.Edit);
    // console.log('todo',this.state.todo)
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.toggle) {
      this.setState({ todo: "", list: [...this.state.list, this.state.todo] });
    } else {
      // console.log("edit",this.state.Edit)
      
    }
  };
  handleDelete = i => {
    console.log("index", this.state.list[i]);
    let item = this.state.list[i];
    let filteredList = this.state.list.filter(i => i !== item);
    console.log(filteredList);
    this.setState({ list: filteredList });
  };
  handleEdit = i => {
    // console.log(this.state.Edit);
    
    if (this.state.toggle) {
      this.setState({ toggle: false })
     
    } else {
      this.setState({ toggle: true });
      this.setState({ Edit: this.state.Edit });
      this.setState({list2: this.state.list.splice(i,1 ,this.state.Edit)})
      
      
      
       
    }
    return this.state.list
  };

  render() {
    console.log("app renders",this.state.list)
    return (
      <div className="App">
        <TodoInput
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* {  this.state.list.map(m=><h1>{m}</h1>)} */}

        <Todolist
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          toggle={this.state.toggle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          Edit={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
