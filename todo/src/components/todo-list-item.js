import React from 'react';

import './todo-list-item.css';
import {todoEvents} from './todo-events';

export default class ToDoListItem extends React.Component {

	crossOutItem = () => {
		todoEvents.emit('ECrossOutItem', this.props.todo.key);
	};

	markImportant = () => {
		todoEvents.emit('EMarkImportant', this.props.todo.key);
	};

	delBtnClicked = () => {
		todoEvents.emit('EDeleteClicked', this.props.todo.key);
	}

	render() {
		const {label, important, done} = this.props.todo;
		let className = 'todo-list-item';
		if (done) {
			className += ' done';
		}
		if (important) {
			className += ' important';
		}

		return (
			<span className={className}>
				<span
					className="todo-list-item-label"
					onClick={this.crossOutItem}>
					{label}
				</span>
	
				<button type="button"
								className="btn btn-outline-success btn-sm"
								onClick={this.markImportant}>
					<i className="bi bi-bell" />
				</button>
	
				<button type="button"
								className="btn btn-outline-danger btn-sm"
								onClick={this.delBtnClicked}>
					<i className="bi bi-trash" />
				</button>
			</span>
		)
	}
}


