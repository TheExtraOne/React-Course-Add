import React from 'react';


import AppHeader from './app-header';
import SearchPanel from './search-pannel';
import TodoList from './todo-list';
import ItemStatusFilter from './item-status-filter';
import './app.css';
import {todoEvents} from './todo-events';

export default class App extends React.Component {
  state = {
    todoData: [
      {label:'Drink Coffee', key:1},
      {label:'Make awesome React app', important:true, key:2},
      {label:'Have lunch', key:3}
    ],
  }

  deleteItem = (id) => {
    console.log(id);
  };

  componentDidMount = () => {
    todoEvents.addListener('EDeleteClicked', this.deleteItem);
  };

  componentWillUnmount = () => {
    todoEvents.removeListener('EDeleteClicked', this.deleteItem);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData} />
      </div>
    );
  }
}
