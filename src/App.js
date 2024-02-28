import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToAction, RemoveToDoAction } from "./actions/TodoActions";
function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.Todo);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(AddToAction(todo));
   setTodo("")
  };

  const removeTodo = (todo)=>{
     dispatch(RemoveToDoAction(todo))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>To do list in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            type="text"
            placeholder="Enter a Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            type="submit"
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos.map((todo) => (
            <li className="singleTodo">
              <span className="todoText">{todo.todo}</span>
              <button
                onClick={()=>removeTodo(todo)}
                style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "1px solid white",
                  color: "white",
                  backgroundColor: "red",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
