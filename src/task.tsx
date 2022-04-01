import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";
import './App.css';
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton} from '@material-ui/core';
import {Delete, DeleteOutline} from "@material-ui/icons";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}

function DeleteOutlineIcon(props: { fontSize: string }) {
    return null;
}

const Task: React.FC<TaskPropsType> = (props) => {
    const removeTask = () => props.removeTask(props.id)
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.id, e.currentTarget.checked)
    }
    const changeTaskTitle = (title: string) => {
        props.changeTaskTitle(props.id, title)
    }
    return (
        <div className='tasksDiv'>
            <Checkbox size='medium'
                      checked={props.isDone}
                      onChange={changeTaskStatus}/>
            <span className={props.isDone ? 'taskDisable' : 'taskEnable'}>
                    <EditableSpan title={props.title} changeTitle={changeTaskTitle}/>
                </span>
            <IconButton className={props.isDone ? 'taskCheck' : ''}  size='small' onClick={removeTask}>
                <Delete fontSize='medium'/>
            </IconButton>
        </div>
    );
};

export default Task;