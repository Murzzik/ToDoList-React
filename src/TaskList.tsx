import React from 'react';
import Task from "./task";
import {TaskType} from "./TodoList";
import {FilterValuesType} from "./App";


type TasksListPropsType = {
    task: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType, taskListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}
const TasksList = (props: TasksListPropsType) => {

    const tasksComponentsList = props.task.map(task => {
        return (
            <Task key={task.id} {...task} removeTask={props.removeTask}
                  changeTaskStatus={props.changeTaskStatus} changeTaskTitle={props.changeTaskTitle}
            />
        )
    }) // nema

    return (tasksComponentsList.length ?
            <>{tasksComponentsList}</>
            :
            <div className='errorMsg'>Please add task or change task filter!</div>
    );
};
export default TasksList;
