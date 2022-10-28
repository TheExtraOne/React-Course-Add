import React from 'react';

import './todo-list-item.css';

//деструктуризующее присваивание props.label === {label}
const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm">
                <i className="bi bi-bell" />
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash" />
            </button>
        </span>
    )
}

export default ToDoListItem;