import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItem = {
    addItem: (trimmedTitle: string) => void
}

const AddItemForm = (props: AddItem) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<boolean>(false)

    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
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
        e.key === "Enter" && addItem()
    }

    const errorMessage = error ? <div className='errorMsg'>Title is require!</div> : null

    return (
        <div>
            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addItem}>+</button>
            {errorMessage}
        </div>
    );
};

export default AddItemForm;