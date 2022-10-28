import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPannel from './components/search-pannel';
import ToDoList from './components/todo-list';

const App = () => {
  const todoData = [
    {label:'Drink Coffee'},
    {label:'Make awesome React app', important:true},
    {label:'Have lunch'}
  ];

  return (
    <div>
      <AppHeader />
      <SearchPannel />
      <ToDoList todos={todoData}/>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector('#root'))
        .render(<App />);
