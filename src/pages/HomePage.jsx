import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/home/TodoList";
import { addNewTodo, setActiveTodo } from "../actions/todo";

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage(props) {
    const todoList = useSelector(state => state.todo.list);
    const activeId = useSelector(state => state.todo.activeId);

    const dispatch = useDispatch();

    const handleAddTodoClick = () => {
        const newId = randomNumber();

        const newTodo = {
            id: newId,
            title: `To do ${newId}`
        }

        const action = addNewTodo(newTodo);
        dispatch(action);
    }

    const handleTodoClick = (todo) => {
        const action = setActiveTodo(todo);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <button onClick={handleAddTodoClick}>Random</button>
            <TodoList 
                todoList={todoList}
                activeId={activeId}
                onTodoClick={handleTodoClick}
                />
        </div>
    );
}

export default HomePage;