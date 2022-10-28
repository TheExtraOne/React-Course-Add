import React from 'react';

import ToDoListItem from './todo-list-item';

const ToDoList = ({todos}) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <ToDoListItem
        //label={item.label} если имя свойства компонента совпадает с именами свойств объекта, то ожно записать так:
        //<ToDoListItem {...item}/>    Спред-оператор для объекта
          label={item.label}
          important={item.important}/>
      </li>);
  });
  return (
    <ul>{elements}</ul>
  )
}

export default ToDoList;
