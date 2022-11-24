import React from 'react';

import AppHeader from './app-header';
import SearchPanel from './search-pannel';
import TodoList from './todo-list';
import ItemStatusFilter from './item-status-filter';
import AddItemForm from './add-item-form'
import './app.css';
import {todoEvents} from './todo-events';

export default class App extends React.Component {
  maxId = 1;

  state = {
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make awesome React app'),
      this.createItem('Have lunch'),
      // {label:'Drink Coffee', important:false, done:false, key:1},
      // {label:'Make awesome React app', important:true, done:false, key:2},
      // {label:'Have lunch', important:false, done:false, key:3}
    ],
    filteredData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make awesome React app'),
      this.createItem('Have lunch'),
    ],
  }

  createItem(label) {
    return {
      label,
      important:false,
      done:false,
      key:this.maxId++,
    }
  };

  toggleProp(id, arr, prop) {
    let newTodo = [...arr];
    newTodo.forEach(item => {
      if (item.key === id) {
        let newProp = !(item[prop]);
        item[prop] = newProp;
      }
    });
    this.setState({todoData: newTodo});
  };

  addNewItem = (str) => {
    const newList = [...this.state.filteredData, this.createItem(str)];
    this.setState({filteredData: newList, todoData: newList});
  };

  deleteItem = (id) => {
    let newTodo = [...this.state.todoData].filter(item => item.key !== id);
    this.setState({filteredData: newTodo, todoData: newTodo})
  };

  crossOutItem = (id) => {
    this.toggleProp(id, this.state.filteredData, 'done');
  };

  markImportant = (id) => {
    this.toggleProp(id, this.state.filteredData, 'important');
  };

  beginSearch = (str) => {
    this.setState({filteredData: [...this.state.todoData].filter((item) => item.label.toLowerCase().includes(str))});
  };

  filtrate = (str) => {
    if (str === 'All') {
      this.setState({filteredData: [...this.state.todoData]});
      return;
    }
    if (str === 'Active') {
      this.setState({filteredData: [...this.state.todoData].filter((item) => !(item.done))});
      return;
    }
    if (str === 'Done') {
      this.setState({filteredData: [...this.state.todoData].filter((item) => item.done)});
      return;
    }
  };

  componentDidMount = () => {
    todoEvents.addListener('EDeleteClicked', this.deleteItem);
    todoEvents.addListener('ECrossOutItem', this.crossOutItem);
    todoEvents.addListener('EMarkImportant', this.markImportant);
    todoEvents.addListener('EAddItemClicked', this.addNewItem);
    todoEvents.addListener('EBeginSearch', this.beginSearch);
    todoEvents.addListener('EFilterIsActive', this.filtrate);
  };

  componentWillUnmount = () => {
    todoEvents.removeListener('EDeleteClicked', this.deleteItem);
    todoEvents.removeListener('ECrossOutItem', this.crossOutItem);
    todoEvents.removeListener('EMarkImportant', this.markImportant);
    todoEvents.removeListener('EAddItemClicked', this.addNewItem);
    todoEvents.removeListener('EBeginSearch', this.beginSearch);
    todoEvents.removeListener('EFilterIsActive', this.filtrate);
  };

  render() {
    const doneCount = this.state.todoData.filter(item => item.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.filteredData} />
        <AddItemForm />
      </div>
    );
  }
}
