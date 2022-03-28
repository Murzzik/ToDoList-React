import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const Task: React.FC<TaskPropsType> = (props) => {
    let taskClass = `task ${props.isDone ? 'completed-task' : ''}`
    const removeTask = () => props.removeTask(props.id)

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.id, e.currentTarget.checked)
    }
    return (
        <li>
            <input type="checkbox"
                   checked={props.isDone}
                   onChange={changeTaskStatus}/>
            <span className={taskClass}>{props.title}</span>
            <button onClick={removeTask}>x</button>
        </li>
    );
};

export default Task;