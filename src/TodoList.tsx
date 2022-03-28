import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import ControlButtons from "./ControlButtons";
import {FilterValuesType} from "./App";


type TodoListPropsType = {
    id: string
    title: string
    task: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (taskID: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const removeTask = (taskID: string) => {
        props.removeTask(taskID, props.id)
    }
    const changeFilter = (filter: FilterValuesType) => {
        props.changeFilter(filter, props.id)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        props.changeTaskStatus(taskID, isDone, props.id)
    }

    return (
        <div>
            <TodoListHeader title={props.title} addTask={props.addTask} filter={props.filter}/>
            <AddTaskForm addTask={addTask}/>
            <TasksList task={props.task} removeTask={removeTask} changeFilter={changeFilter}
                       filter={props.filter} changeTaskStatus={changeTaskStatus}/>
            <ControlButtons changeFilter={changeFilter} filter={props.filter}/>
        </div>
    );
};

export default TodoList;