import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {AddCircleOutline} from "@material-ui/icons";
import {IconButton, TextField} from "@material-ui/core";

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
            <TextField required id="standard-required"
                       label="Title is required!"
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       variant="outlined" className={error ? 'error' : ''}
            />
            <IconButton size='medium' onClick={addItem}><AddCircleOutline/></IconButton>
            {errorMessage}
        </div>
    );
};

export default AddItemForm;