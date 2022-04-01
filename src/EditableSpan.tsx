import React, {ChangeEvent, useState} from 'react';
import './App.css'
import {TaskType} from "./TodoList";
import {TextField} from "@material-ui/core";

type EditableSpan = {
    title: string
    changeTitle: (title: string) => void
}

const EditableSpan = (props: EditableSpan) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState(props.title)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <TextField className='inputField' id="standard-basic" label={props.title} onBlur={offEditMode} autoFocus value={title} onChange={onChangeHandler}/>
            : <span className='projectTitle' onDoubleClick={onEditMode}>{props.title}</span>
    );
};
export default EditableSpan;