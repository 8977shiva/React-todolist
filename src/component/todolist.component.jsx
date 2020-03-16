import React from "react";
import "./todolist.css";

class Todolist extends React.Component {
  render() {
    // console.log(this.props.toggle);
    console.log(this.props.list);
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index} required>
                {item}
                <button onClick={() => this.props.handleDelete(index)}>
                  delete
                </button>
                <button onClick={() => this.props.handleEdit(index)}>
                  Edit
                </button>
                <form className={`${this.props.toggle ? "noEdit" : "edit"}`} >
                  <input
                    type="text"
                    name="Edit"
                    onChange={this.props.handleChange}
                  />
                   
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
