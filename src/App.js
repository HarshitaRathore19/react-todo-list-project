import React from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4 bg-warning">Hello</div>
          <div className="col-4 bg-danger">Hello</div>
          <div className="col-4 bg-primary">Hello</div>
          <TodoList></TodoList>
          <TodoInput></TodoInput>

        </div>

      </div>
    </div>
  );
}

export default App;
