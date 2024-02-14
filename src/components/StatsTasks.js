import {List} from "@mui/material";
import React from "react";
import UncompletedTasks from "./UncompletedTasks";
import CompletedTasks from "./CompletedTasks";
import DeadlineExceededTasks from "./DeadlineExceededTasks";

const StatsTasks = ({tasks}) => {
    return (
        <div>
            <h2>Statistiques :</h2>
            <List>
                <UncompletedTasks tasks={tasks}/>
                <CompletedTasks tasks={tasks}/>
                <DeadlineExceededTasks tasks={tasks}/>
            </List>
        </div>
    );
}

export default StatsTasks;