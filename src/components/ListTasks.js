import {List} from "@mui/material";
import {DisplayTaskLine} from "./DisplayTaskLine";
import React from "react";

const ListTasks = ({tasks}) => {
    return (
        <List>
            {tasks.map(task => <DisplayTaskLine task={task} key={task.id}/>)}
        </List>
    );
}

export default ListTasks;