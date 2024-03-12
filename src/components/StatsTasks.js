import {List} from "@mui/material";
import React from "react";
import UncompletedTasks from "./UncompletedTasks";
import CompletedTasks from "./CompletedTasks";
import DeadlineExceededTasks from "./DeadlineExceededTasks";
import {TasksContext} from "./TasksContext";

const StatsTasks = ({tasks}) => {
    return (
        <div>
            <h2>Statistiques :</h2>
            <TasksContext.Provider value={tasks}>
                <List>
                    <UncompletedTasks/>
                    <CompletedTasks/>
                    <DeadlineExceededTasks/>
                </List>
            </TasksContext.Provider>
        </div>
    );
}

export default StatsTasks;