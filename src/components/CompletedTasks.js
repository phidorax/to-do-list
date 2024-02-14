import {ListItem} from "@mui/material";
import React from "react";

const CompletedTasks = ({tasks}) => {
    // count all tasks completed
    const countCompleted = tasks.filter(task => task.completed).length;
    return (
        <ListItem>Tâches complétées : {countCompleted}</ListItem>
    );
}

export default CompletedTasks;