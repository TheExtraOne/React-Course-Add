import React from 'react';

import './todo-list-item.css';
import {todoEvents} from './todo-events';

export default class ToDoListItem extends React.Component {

	state = {
		done: false,
		important: false,
	};

	crossOutItem = () => {
		this.setState( (prev) => {return {done: !prev.done}} );
	};

	markImportant = () => {
		this.setState( (prev) => {return {important: !prev.important}} );
	};

	delBtnClicked = () => {
		todoEvents.emit('EDeleteClicked', this.props.code);
	}

	render() {
		const {done, important} = this.state;
		const {label} = this.props;
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
// const ToDoListItemFunc = ({label, important = false}) => {
// 	const style = {
// 		color: important ? 'steelblue' : 'black',
// 		fontWeight: important ? 'bold' : 'normal'
// 	};

// 	return (
// 		<span className="todo-list-item">
// 			<span
// 				className="todo-list-item-label"
// 				style={style}>
// 				{label}
// 			</span>

// 			<button type="button"
// 							className="btn btn-outline-success btn-sm">
// 				<i className="bi bi-bell" />
// 			</button>

// 			<button type="button"
// 							className="btn btn-outline-danger btn-sm">
// 				<i className="bi bi-trash" />
// 			</button>
// 		</span>
// 	)
// }

