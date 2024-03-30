import {Grid} from "@mui/material";
import {DisplayTaskLine} from "./DisplayTaskLine";
import React, {useContext} from "react";
import {TaskContext, TasksContext} from "./TasksContext";

const ListTasks = () => {
    const tasks = useContext(TasksContext);
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} style={{marginTop: "8px"}}>
            {tasks.map(task =>
                <TaskContext.Provider value={task} key={task.id}>
                    <DisplayTaskLine/>
                </TaskContext.Provider>)
            }
        </Grid>
    );
}

export default ListTasks;