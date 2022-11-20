import React from 'react';

import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {
  const elements = todos.map((item) => {
    //const {key, ...restItemProps} = item;
    return (
      <li key={item.key} className='list-group-item'>
        <ToDoListItem label={item.label} code={item.key}/>
      </li>);
  });
  return (
    <ul className='list-group todo-list'>{elements}</ul>
  )
}

export default ToDoList;
