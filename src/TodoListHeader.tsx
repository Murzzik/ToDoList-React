import React from 'react';
import {FilterValuesType} from "./App";
import './App.css'
import EditableSpan from "./EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoListHeaderPropsType = {
    title: string
    filter: FilterValuesType
    addTask: (title: string, todoListID: string) => void
    removeTodoList: () => void
    changeToDoListTitle: (title: string) => void
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {
    return (
        <h3 className='headerTitle'>
            <EditableSpan title={props.title} changeTitle={props.changeToDoListTitle}/>
            <IconButton aria-label="delete" onClick={props.removeTodoList}>
                <Delete/>
            </IconButton>
        </h3>
    )
};

export default TodoListHeader;

