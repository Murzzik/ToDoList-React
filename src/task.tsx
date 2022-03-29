import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";
import './App.css';
import deleteTask from './image/deleteTaskLogo.png'
import EditableSpan from "./EditableSpan";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
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
        <div>
            <button className='deleteTaskBtn' onClick={removeTask}><img src={deleteTask}/></button>
            <div className='tasksDiv'>
                <input type="checkbox"
                       checked={props.isDone}
                       onChange={changeTaskStatus}/>
                <span className={props.isDone ? 'taskCheck' : ''}>
                    <EditableSpan title={props.title} changeTitle={changeTaskTitle} />
                </span>
            </div>
        </div>
    );
};

export default Task;