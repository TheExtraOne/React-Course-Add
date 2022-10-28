import React from 'react';

//деструктуризующее присваивание props.label === {label}
const ToDoListItem = ({label, important = false}) => {
    const itemStyle = {
        color: important ? 'tomato' : 'null'
    }
    return <span style={itemStyle}>{label}</span>
}

export default ToDoListItem;