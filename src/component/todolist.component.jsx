import React from "react";

class Todolist extends React.Component {
  render() {
    console.log("todolist", this.props.list);
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={()=>this.props.handleDelete(index)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
