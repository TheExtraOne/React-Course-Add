import React from 'react';


import AppHeader from './app-header';
import SearchPanel from './search-pannel';
import TodoList from './todo-list';
import ItemStatusFilter from './item-status-filter';
import './app.css';

const App = () => {
  const todoData = [
    {label:'Drink Coffee', key:1},
    {label:'Make awesome React app', important:true, key:2},
    {label:'Have lunch', key:3}
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
}

export default App;