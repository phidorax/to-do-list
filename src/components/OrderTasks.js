import {Button, ButtonGroup} from "@mui/material";
import React from "react";

const OrderTasks = ({setOrder}) => {
    return (
        <ButtonGroup variant="contained" aria-label="Filter Task">
            <Button variant="contained" onClick={() => setOrder('asc')}>Croissant</Button>
            <Button variant="contained" onClick={() => setOrder('desc')}>Décroissant</Button>
        </ButtonGroup>
    );
}

export default OrderTasks;