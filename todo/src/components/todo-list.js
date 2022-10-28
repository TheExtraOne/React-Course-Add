import React from 'react';

import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {
  const elements = todos.map((item) => {
    const {key, ...restItemProps} = item;
    return (
      <li key={key} className='list-group-item'>
        <ToDoListItem {...restItemProps}/>
      </li>);
  });
  return (
    <ul className='list-group todo-list'>{elements}</ul>
  )
}

export default ToDoList;
