import {ListItem} from "@mui/material";
import React from "react";

const UncompletedTasks = ({tasks}) => {
    // count all tasks not completed
    const countUncompleted = tasks.filter(task => !task.completed).length;
    return (
        <ListItem>Tâches non complétées : {countUncompleted}</ListItem>
    );
}

export default UncompletedTasks;