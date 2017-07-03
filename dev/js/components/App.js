import React from 'react';
import TodoForm from '../containers/todo-form';
import DisplayList from '../containers/displaylist';
import SearchTodo from '../containers/search-todo';
require('../../scss/style.scss');
const App = () =>(
  <div>
    <h2>TodoForm</h2>
    <TodoForm/>
    <h2>Todo List</h2>
    <DisplayList />
    <h2>Search</h2>
    <SearchTodo />
  </div>
);

export default App;
