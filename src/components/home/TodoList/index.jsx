import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.styles.css';

TodoList.propTypes = {
    todoList: PropTypes.array,
    activeId: PropTypes.number,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    active: null,
    onTodoClick: null
};

function TodoList(props) {
    const { todoList, activeId, onTodoClick } = props;

    const handleClick = (todo) => {
        if(onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todoList.map(todo => (
                <li 
                    key={todo.id}
                    className={todo.id === activeId ? 'active' : ''}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;