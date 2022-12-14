import React from 'react';

import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.key} className='list-group-item'>
        <ToDoListItem todo={item}/>
      </li>);
  });
  return (
    <ul className='list-group todo-list'>{elements}</ul>
  )
}

export default ToDoList;
