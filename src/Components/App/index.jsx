import react from "react";
import "./style.css";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      inputText: "",
     
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText : event.target.value
    })
  
  }
  
  addTodo = (event) => {
    if(event.key=== "Enter" && this.state.inputText){
      this.setState({
        todoList : this.state.todoList.concat(this.state.inputText), 
        inputText: "",
      })
    }
    console.dir(event.key)
}

  handleCross = (todo) => {
    let filteredTodos = this.state.todoList.filter(e => e !== todo)
    this.setState({
          todoList: filteredTodos
      })
  }
  render() {
console.log(this.state.todoList)
    return (
      <>
        <div className="container">
          <h1>todos</h1>
          <input
            onChange={this.handleChange}
            onKeyDown= {this.addTodo}
            value={this.state.inputText}
            type="text"
            placeholder="What needs to be done..."
           
          />
          <ul>

            {this.state.todoList.map((todo, i) => 
              <div className="todo-list flex">
                <input type="checkbox" />
                <h2>{todo}</h2>
                
                <button onClick={()=>this.handleCross(todo)} className="cross-btn">❌</button>
              </div>
            ) 
            }
          </ul>
          <div className="btn-container">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button>Clear Completed</button>
          </div>
        </div>
      </>
    );
  }
}
export default App;
