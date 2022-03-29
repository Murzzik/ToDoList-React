import React from 'react';
import {FilterValuesType} from "./App";
import EditableSpan from "./EditableSpan";

type TodoListHeaderPropsType = {
    title: string
    filter: FilterValuesType
    addTask: (title: string, todoListID: string) => void
    removeTodoList: () => void
    changeToDoListTitle: (title: string) => void
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {
    return (
        <h3>
            <EditableSpan title={props.title} changeTitle={props.changeToDoListTitle}/>
            <button onClick={props.removeTodoList}>x</button>
        </h3>
    )
};

export default TodoListHeader;

