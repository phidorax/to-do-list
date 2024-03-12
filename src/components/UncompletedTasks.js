import {ListItem} from "@mui/material";
import React, {useContext} from "react";
import {TasksContext} from "./TasksContext";

const UncompletedTasks = () => {
    const tasks = useContext(TasksContext);
    // count all tasks not completed
    const countUncompleted = tasks.filter(task => !task.completed).length;
    return (
        <ListItem>Tâches non complétées : {countUncompleted}</ListItem>
    );
}

export default UncompletedTasks;