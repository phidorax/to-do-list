import {Button, ButtonGroup} from "@mui/material";
import React from "react";

const FilterTasks = ({filter, setFilter}) => {
    return (
        <ButtonGroup variant="contained" aria-label="Filter Task">
        <Button variant="contained" onClick={() => setFilter('all')}>All</Button>
            <Button variant="contained" onClick={() => setFilter('completed')}>Completed</Button>
            <Button variant="contained" onClick={() => setFilter('uncompleted')}>Uncompleted</Button>
        </ButtonGroup>
    );
}

export default FilterTasks;