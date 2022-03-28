import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type PropsType = {
    addTask: (title: string) => void
}

const AddTaskForm: React.FC<PropsType> = ({addTask}) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle) {
            addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddTask()
    }

    const errorMessage = error ? <div className='errorMsg'>Title is require!</div> : null

    return (
        <div>
            <input className={error ? 'error' : ''} value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickAddTask}>+</button>
            {errorMessage}
        </div>
    );
};

export default AddTaskForm;