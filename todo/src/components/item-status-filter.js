
import React from 'react';

import './item-status-filter.css';
import {todoEvents} from './todo-events';

export default class ItemStatusFilter extends React.Component {
	filterIsActive(event) {
		const btnGroup = document.querySelector('.btn-group');
		const btnArr = btnGroup.querySelectorAll('.btn');
		btnArr.forEach((item) => {
			if (item === event.target) {
				item.className = 'btn btn-info';
			} else {
				item.className = 'btn btn-outline-secondary';
			}
		});
		todoEvents.emit('EFilterIsActive', event.target.innerText);
	}

	render() {
		return (
			<div className="btn-group">
				<button type="button"
								className="btn btn-info"
								onClick={this.filterIsActive}>
					All
				</button>
				<button type="button"
								className="btn btn-outline-secondary"
								onClick={this.filterIsActive}>
					Active
				</button>
				<button type="button"
								className="btn btn-outline-secondary"
								onClick={this.filterIsActive}>
					Done
				</button>
			</div>
		);
	}
}

