import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";
import AddItemForm from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

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
    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }

    const changeTaskTitle = (id: string, title: string, todoListID: string) => {
        console.log(id, title, todoListID)
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(t => t.id === id ? {...t, title} : t)})
    }

    const changeTodolistTitle = (todoListID: string, title: string) => {
        debugger
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? {...tl, title} : tl))
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
    const addTodoList = (title: string) => {
        const newTodoList_ID = v1()
        const newTodoList: ToDoListType = {
            id: newTodoList_ID, title, filter: 'all'
        }
        const updatedTodoLists = [...todoLists, newTodoList]
        setTodoLists(updatedTodoLists)
        setTasks({...tasks, [newTodoList_ID]: []})
    }
    const todoListsForRender = todoLists.map(tl => {
        const filteredTasksForRender = getFilteredTasksForRender(tl)
        return (
            <Grid item>
                <Paper className='paperBlock' elevation={8}>
                    <TodoList key={tl.id}
                              id={tl.id}
                              title={tl.title}
                              task={filteredTasksForRender}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              filter={tl.filter}
                              changeTaskStatus={changeTaskStatus}
                              removeTodoList={removeTodoList}
                              changeTaskTitle={changeTaskTitle}
                              changeToDoListTitle={changeTodolistTitle}
                    />
                </Paper>
            </Grid>
        )
    })
    return (
        <div className="App">
            <AppBar position='static'>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6'>
                        Todolists
                    </Typography>
                    <Button color='inherit' variant='outlined'>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container className='addItem'>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {todoListsForRender}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
