import {ListItem} from "@mui/material";
import React, {useContext} from "react";
import {TasksContext} from "./TasksContext";

const CompletedTasks = () => {
    const tasks = useContext(TasksContext);
    // count all tasks completed
    const countCompleted = tasks.filter(task => task.completed).length;
    return (
        <ListItem>Tâches complétées : {countCompleted}</ListItem>
    );
}

export default CompletedTasks;