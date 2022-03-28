import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"
type ToDoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [todoListID: string]: Array<TaskType>
}

function App() {
    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const [todoLists, setTodoLists] = useState<Array<ToDoListType>>([
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'all'}
    ])
    const [tasks, setTasks] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: false},
            {id: v1(), title: 'JS/TS', isDone: true},
        ],
        [todoListID_2]: [
            {id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Meat', isDone: false},
            {id: v1(), title: 'Milk', isDone: true},
        ]
    })
    const removeTask = (taskID: string, todoListID: string) => {
        const tasksForTodoLists = tasks[todoListID] // Array<TodoListType>
        tasks[todoListID] = tasksForTodoLists.filter(t => t.id !== taskID) // new Array<TodoListType>
        setTasks({...tasks})
    }
    const addTask = (title: string, todoListID: string) => {
        const newTask: TaskType = {
            id: v1(), title, isDone: false
        }
        const updatedTasks = [newTask, ...tasks[todoListID]]
        setTasks({...tasks, [todoListID]: updatedTasks})
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {...t, isDone} : t)
        })
    }
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? {...tl, filter} : tl))
    }


    const getFilteredTasksForRender = (todoList: ToDoListType) => {
        switch (todoList.filter) {
            case "completed":
                return tasks[todoList.id].filter(tl => tl.isDone);
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            default:
                return tasks[todoList.id]
        }
    }
    const todoListsForRender = todoLists.map(tl => {
        const filteredTasksForRender = getFilteredTasksForRender(tl)
        return (<TodoList key={tl.id}
                          id={tl.id}
                          title={tl.title}
                          task={filteredTasksForRender}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}
                          filter={tl.filter}
                          changeTaskStatus={changeTaskStatus}
            />
        )
    })
    return (
        <div className="App">
            {todoListsForRender}
        </div>
    );
}

export default App;
