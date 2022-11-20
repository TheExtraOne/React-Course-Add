import React from 'react';

import './add-item-form.css';
import {todoEvents} from './todo-events';

export default class AddItemForm extends React.Component {

  newItemRef = React.createRef();

  addItemClicked = () => {
    todoEvents.emit('EAddItemClicked', this.newItemRef.current.value);
  };

  formIsSubmited = (EO) => {
    //иначе перезагрузка страницы и отправка данных 
    EO.preventDefault();
    this.addItemClicked();
    this.newItemRef.current.value = '';
  }

  render() {
    return (
      // вместо form можно обычный div, тогда повесить this.addItemClicked на кнопку
      <form className='item-add-form d-flex' onSubmit={this.formIsSubmited}>
        <input
          type='text'
          className='form-control'
          placeholder='What needs to be done'
          ref={this.newItemRef}/>
        <button className='btn btn-outline-secondary'>
          Add Item
        </button>
      </form>
    )
  }
}
