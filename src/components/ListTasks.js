import {List} from "@mui/material";
import {DisplayTaskLine} from "./DisplayTaskLine";
import React, {useContext} from "react";
import {TasksContext, TaskContext} from "./TasksContext";

const ListTasks = () => {
    const tasks = useContext(TasksContext);
    return (
        <List>
            {tasks.map(task =>
                <TaskContext.Provider value={task} key={task.id}>
                    <DisplayTaskLine/>
                </TaskContext.Provider>)
            }
        </List>
    );
}

export default ListTasks;