import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-pannel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';

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

ReactDOM.createRoot(document.querySelector('#root'))
        .render(<App />);
