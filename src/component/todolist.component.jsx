import React from "react";
import "./todolist.css";

class Todolist extends React.Component {
  render() {
    // console.log(this.props.toggle);
    // console.log(this.props.list);
    return (
      <div className='list' >
        <ul >
          {this.props.list.map((item, index) => {
            return (
              <li key={index}  >
                {item}
                <button onClick={() => this.props.handleDelete(index)}>
                  delete
                </button>
                <button onClick={() => this.props.handleEdit(index, item)}>
                  Edit
                </button>
              
                <form className={`${this.props.toggle ? "noEdit" : "edit"}`} >
                 <input
                   type="text"
                    name="Edit"
                     value={this.props.Edit}
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
