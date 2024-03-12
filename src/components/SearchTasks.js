import {TextField} from "@mui/material";
import React from "react";

const SearchTasks = ({setSearch}) => {
    return (
        <TextField id="input-task" label="Search ..." variant="outlined" onChange={setSearch} />
    );
}

export default SearchTasks;