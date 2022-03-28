import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonsType = {
    filter: FilterValuesType
    changeFilter: (filter: FilterValuesType) => void
}

const ControlButtons = (props: ControlButtonsType) => {
    const onClickFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

    return (
        <div>
            <button className={props.filter === 'all' ? 'button-active' : ''} onClick={onClickFilter("all")}>All
            </button>
            <button className={props.filter === 'active' ? 'button-active' : ''}
                    onClick={onClickFilter("active")}>Active
            </button>
            <button className={props.filter === 'completed' ? 'button-active' : ''}
                    onClick={onClickFilter("completed")}>Completed
            </button>
        </div>
    );
};

export default ControlButtons;