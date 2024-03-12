import {ListItem} from "@mui/material";
import React, {useContext} from "react";
import {TasksContext} from "./TasksContext";

const DeadlineExceededTasks = () => {
    const tasks = useContext(TasksContext);
    // count with deadline exceeded
    const countDeadlineExceeded = tasks.filter(task => task.deadline && new Date(task.deadline) < new Date()).length;
    return (
        <ListItem>Tâches avec délai dépassé : {countDeadlineExceeded}</ListItem>
    );
}

export default DeadlineExceededTasks;