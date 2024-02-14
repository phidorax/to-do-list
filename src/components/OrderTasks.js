import {Button, ButtonGroup} from "@mui/material";
import React from "react";

const OrderTasks = ({order, setOrder}) => {
    return (
        <ButtonGroup variant="contained" aria-label="Filter Task">
            <Button variant="contained" onClick={() => setOrder('asc')}>Asc</Button>
            <Button variant="contained" onClick={() => setOrder('desc')}>Desc</Button>
        </ButtonGroup>
    );
}

export default OrderTasks;