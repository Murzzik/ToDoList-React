import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TaskList";
import ControlButtons from "./ControlButtons";
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";

type TodoListPropsType = {
    id: string
    title: string
    task: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (taskID: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeToDoListTitle: (todoListID: string, title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const removeTask = (taskID: string) => {
        props.removeTask(taskID, props.id)
    }
    const changeFilter = (filter: FilterValuesType) => {
        props.changeFilter(filter, props.id)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        props.changeTaskStatus(taskID, isDone, props.id)
    }
    const removeTodoList = () => {
        props.removeTodoList(props.id)
    }
    const addTaskToTodoList = (trimmedTitle: string) => props.addTask(trimmedTitle, props.id)

    const changeTaskTitle = (taskID: string, title: string) => {
        props.changeTaskTitle(taskID, title, props.id)
    }
    const changeToDoListTitle = (title: string) => {
        props.changeToDoListTitle(props.id, title)
    }

    return (
        <div className='toDoLists'>
            <TodoListHeader title={props.title} addTask={props.addTask} filter={props.filter} removeTodoList={removeTodoList} changeToDoListTitle={changeToDoListTitle}/>
            <AddItemForm addItem={addTaskToTodoList}/>
            <TasksList task={props.task} removeTask={removeTask} changeFilter={changeFilter}
                       filter={props.filter} changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle}/>
            <ControlButtons changeFilter={changeFilter} filter={props.filter}/>
        </div>
    );
};

export default TodoList;