import React, {Component} from 'react';

class TodoList extends Component{
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }

  // Methods

  addItem = (event) =>{
    event.preventDefault();
    console.log("The add item method executed.");
  }

  handleChange = (event) =>{
    console.log(event.target.value);
  }



  render(){
    return(
        <div className="container">

          <form onSubmit={this.addItem}>

            <label htmlFor="taskName">Task Name</label>
            <input onChange={this.handleChange} name="taskName" type="text" placeholder="Tasks to do"/>

            <button type="submit">Add</button>

          </form>



        </div>
    );
    }
}

export default TodoList;