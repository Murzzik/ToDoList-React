import React from 'react';
import {FilterValuesType} from "./App";

type TodoListHeaderPropsType = {
    title: string
    filter: FilterValuesType
    addTask: (title: string, todoListID: string) => void
}

const TodoListHeader = (props: TodoListHeaderPropsType) => {
    let text = 'all'
    switch (props.filter) {
        case 'active':
            text = 'act'
            break
        case 'completed':
            text = 'comp'
            break
    }

    return (<h3>{props.title}
            <div className='filter-header'>{text}</div>
        </h3>
    )
};

export default TodoListHeader;