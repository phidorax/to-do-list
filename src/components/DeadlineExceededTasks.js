import {ListItem} from "@mui/material";
import React from "react";

const DeadlineExceededTasks = ({tasks}) => {
    // count with deadline exceeded
    const countDeadlineExceeded = tasks.filter(task => task.deadline && new Date(task.deadline) < new Date()).length;
    return (
        <ListItem>Tâches avec délai dépassé : {countDeadlineExceeded}</ListItem>
    );
}

export default DeadlineExceededTasks;