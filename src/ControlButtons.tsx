import React from 'react';
import {FilterValuesType} from "./App";
import {Button, ButtonGroup} from "@material-ui/core";

type ControlButtonsType = {
    filter: FilterValuesType
    changeFilter: (filter: FilterValuesType) => void
}

const ControlButtons = (props: ControlButtonsType) => {
    const onClickFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

    return (
        <div className='btnsGroup'>
                <Button
                    color={props.filter === 'all' ? 'secondary' : 'primary'}
                    onClick={onClickFilter("all")}>All
                </Button>
                <Button
                    color={props.filter === 'active' ? 'secondary' : 'primary'}
                    onClick={onClickFilter("active")}>Active
                </Button>
                <Button
                    color={props.filter === 'completed' ? 'secondary' : 'primary'}
                    onClick={onClickFilter("completed")}>Completed
                </Button>
        </div>
    );
};

export default ControlButtons;