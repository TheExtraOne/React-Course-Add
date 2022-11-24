import React from 'react';

import './search-pannel.css';
import {todoEvents} from './todo-events';

export default class SearchPannel extends React.Component {
  searchRef = React.createRef();

  beginSearch = () => {
    todoEvents.emit('EBeginSearch', this.searchRef.current.value);
  };

  render () {
    return (
      <input type="text"
            className="form-control search-input"
            placeholder="Type to search"
            ref={this.searchRef}
            onChange={this.beginSearch}/>
    );
  }
}
