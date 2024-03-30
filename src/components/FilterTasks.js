import {Button, ButtonGroup} from "@mui/material";
import React from "react";

const FilterTasks = ({setFilter}) => {
    return (
        <ButtonGroup variant="contained" aria-label="Filter Task">
            <Button variant="contained" onClick={() => setFilter('all')}>Tous</Button>
            <Button variant="contained" onClick={() => setFilter('completed')}>Achevé</Button>
            <Button variant="contained" onClick={() => setFilter('uncompleted')}>Inachevé</Button>
        </ButtonGroup>
    );
}

export default FilterTasks;